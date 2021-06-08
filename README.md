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

- Install [git](http://git-scm.com/)

- Install [node.js](https://nodejs.org/en/) (Using the LTS release (14.x as of writing) is recommended.)

- Install [nodecg-cli](https://github.com/nodecg/nodecg-cli) using `npm`: `npm install -g nodecg-cli`

- Install `nodecg` in a new folder:

```shell
mkdir nodecg
cd nodecg
nodecg setup
```

- Install the dashboard: `nodecg install inkfarer/ipl-overlay-controls`

  - The overlays work with v2.x.x of `ipl-overlay-controls`. Specify a version by adding the version number with a \#
    symbol: `nodecg install inkfarer/ipl-overlay-controls#2.0.3`

- Install the overlays: `nodecg install inkfarer/ut-overlays`

- (Optional) Create the configuration file in `[nodecg root]/cfg/ipl-overlay-controls.json` with the following contents:

```json
{
  "lastfm": {
    "targetAccount": "Your last.fm account name",
    "apiKey": "your API key",
    "secret": "your secret"
  },
  "radia": {
    "url": "API URL",
    "authentication": "You Auth Key"
  }
}
```

- Start nodecg using the `nodecg start` command in the folder you installed NodeCG in.

- Access the dashboard from `http://localhost:9090/` in your browser.

- Access the graphics from the "Graphics" tab in the dashboard. They are made to be used as browser sources in your
  preferred broadcast a

## Usage

Start NodeCG. By default, the dashboard can be accessed from `localhost:9090` in your browser.

From the dashboard, URLs to the graphics can be found from the graphics tab. To use them, they should be added as
browser sources in a broadcast application such as OBS Studio. The graphics are made to run at a resolution of
1920x1080.

## Credits

Splatoon 2 map portraits are property of Nintendo and were downloaded from
the [Splatoon wiki.](https://splatoonwiki.org/)
