#include <drogon/drogon.h>
#include <drogon/utils/Utilities.h>
#include <iostream>
#include <chrono>
#include <iomanip>
#include <sstream>
#include <fstream>

using namespace std;
using namespace drogon;

string getCurrentTimeFormatted() {
    auto now = chrono::system_clock::now();
    auto now_c = chrono::system_clock::to_time_t(now);
    tm now_tm = *localtime(&now_c);

    stringstream ss;
    ss << put_time(&now_tm, "%H:%M:%S %B, %d, %Y");
    return ss.str();
}

int main() 
{
    //Set HTTP listener address and port
    std::ofstream file("log.txt", std::ios::app);

    auto port = 6789;

    // auto logger = drogon::app().getLogger()->setLogFile("log.txt");

    cout << "Starting web application for hucekwoodworks.com on port " << port << "\n";
    drogon::app().addListener("0.0.0.0", port);
    //Load config file
    drogon::app().loadConfigFile("../config.json");
    //drogon::app().loadConfigFile("../config.yaml");
    //Run HTTP framework,the method will block in the internal event loop
    drogon::app().registerPreRoutingAdvice([&file](const HttpRequestPtr &req, AdviceCallback &&ac, AdviceChainCallback &&acc) 
    {
        auto s = req->getHeaders();
        auto client = req->getPeerAddr();
        string logtext;
        string time = getCurrentTimeFormatted();
        auto requested_route = req->path();
        logtext += "###\tGot request from : " + client.toIpPort() + " for " + requested_route + " Current time: " + time + "\tHeaders:\n\t";
        for(auto k: s) 
        {
            logtext += k.first + " : " + k.second + " | ";
        }
        logtext += "\n";
        // cout << logtext;
        file << logtext << endl;
        file.flush();
        return acc();
    });
    

    drogon::app().run();
    return 0;
}
