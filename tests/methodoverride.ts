class browser{
    browserVersion()
    {
      console.log('Launching just browser')
    }
}
class chrome extends browser{
    browserVersion(): void {
        console.log('Launching chrome browser version')
    }
}
const br = new browser()
br.browserVersion()
const chr = new chrome()
chr.browserVersion()