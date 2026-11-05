// Settings for the Scramjet proxy. Edit this file after you upload the hub to GitHub.
// A static host (GitHub Pages) cannot run a Wisp server, so point this at one you run or are allowed to use.
// This is Mercury Workshop's public demo server: it is throttled and may go down. Self-host for reliability.
// Leave it empty ("") only when the hub is served by a server that also has a /wisp/ endpoint.
self.HUB_CONFIG = {
  wisp: "wss://wisp.mercurywork.shop/"
};
