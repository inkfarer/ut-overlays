# ut-overlays

A [NodeCG](http://github.com/nodecg/nodecg) bundle for Unnamed Tournament, an 
[Inkling Performance Labs](https://iplabs.ink/) tournament.


## Screenshots

* [Scoreboard (Main scene)](https://inkfarer.com/img/ut-1.png)
* [Break screen](https://inkfarer.com/img/ut-2.png)
* [Upcoming teams](https://inkfarer.com/img/ut-3.png)
* [Upcoming stages](https://inkfarer.com/img/ut-4.png)
* [Dashboard 1 (Setup)](https://inkfarer.com/img/ut-dashboard2.png)
* [Dashboard 2 (Live controls)](https://inkfarer.com/img/ut-dashboard1.png)

## Install

1. Follow the instruction [here in ipl-overlay-controls](https://github.com/inkfarer/ipl-overlay-controls) to do
  the initial setup of NodeCG and Overlay Control Panel.
   
2. Install the overlays: `nodecg install inkfarer/ut-overlays`

3. Start nodecg using the `nodecg start` command in the folder you installed NodeCG in.

4. Access the dashboard from `http://localhost:9090/` in your browser.

5. Access the graphics from the "Graphics" tab in the dashboard. Add the overlays to your streaming application of 
   choice using a **browser** source.
## Usage

Start NodeCG. By default, the dashboard can be accessed from `localhost:9090` in your browser.

From the dashboard, URLs to the graphics can be found from the graphics tab. To use them, they should be added as
browser sources in a broadcast application such as OBS Studio. The graphics should be used at a resolution of
1920x1080.

## Credits

Splatoon 2 map portraits are property of Nintendo and were downloaded from
the [Splatoon wiki.](https://splatoonwiki.org/)
