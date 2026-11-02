class Browser{
    browserType()
    {
        console.log('Accessing browser type');
    }
    browserVesion()
    {
        console.log('Accessing browser version');
    }
}
class Chrome extends Browser{
    launchBrowser()
    {
       console.log('chrome browser launched');
    }
}
const chro = new Chrome()
chro.browserType()
chro.browserVesion()
chro.launchBrowser()
class Edge extends Browser{
    launchBrowser()
    {
        console.log('Edge browser launched');
    }
}
const edg = new Edge()
edg.browserType()
edg.browserVesion()
edg.launchBrowser()
