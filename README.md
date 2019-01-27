# Pini's HTTP Logger

Simple express server that just sits there, logging all requests to STD out

## Installation

1. Install nodeJS on the target system (via installer or package manger like `apt` (ubuntu), `yum` (centOS), `brew` (macOS) or `choco` (windows))
2. Install dependecies by opening the folder and running `npm install`
3. Run application with `node src/server.js` or `npm run start`

### Notes

1. `yarn` was used in development, if `yarn` is installed on the target system simply replace `npm install / npm run start` with `yarn install / yarn start`
2. `npm run dev` for development mode

## Configuration

edit values in .env file to match what you want

## Saving Logs

On (U/L)NIX systems, simply point the output to a file (e.g. `sudo PORT=80 node src/server.js > logs/log.txt`)

## TODO

* Fix .env file configuraitons
* Add option to save logs in batches rather then STD out (e.g. by the day?)
* Save PID and add stop command for BASH and PowerShell

## LICENCE

MIT, do what you want but don't get angry when it breaks ;-)

## Contributions

All pull requests welcome, please be descriptive so that others will praise rather then curse "thouse who came before" ;-).