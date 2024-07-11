#include <drogon/drogon.h>
#include <iostream>
using namespace std;
using namespace drogon;

int main() 
{
    //Set HTTP listener address and port
    auto port = 6789;
    cout << "Starting web application for hucekwoodworks.com on port " << port << "\n";
    drogon::app().addListener("0.0.0.0", port);
    //Load config file
    drogon::app().loadConfigFile("../config.json");
    //drogon::app().loadConfigFile("../config.yaml");
    //Run HTTP framework,the method will block in the internal event loop
    drogon::app().registerPreRoutingAdvice([](const HttpRequestPtr &req, AdviceCallback &&ac, AdviceChainCallback &&acc) 
    {
        auto s = req->getHeaders();
        auto client = req->getPeerAddr();
        cout << "###\tGot request from : " << client.toIpPort() << "\tHeaders:\n\t";
        for(auto k: s) 
        {
            cout << k.first << " : " << k.second << " | ";
        }
        cout << "\n";
        return acc();
    });
    

    drogon::app().run();
    return 0;
}
