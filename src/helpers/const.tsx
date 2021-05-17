import { IconInfo, IconYoutube, IconTelegram, IconInstagram, IconGithub, IconTwitter } from "../icons"

// === ADD CONFIG ===
export const LOGO = "static/images/logo.svg"
export const LOGO_NAME = "Taproot mask"
export const LOGO_WIDTH = "42px"
// to change app colors go to theme.ts

export const APP_TITLE = "Taproot mask"
export const APP_DESCRIPTION =
  "Upload your photo, choose your mask, and download or share with the Twitter button. Signal your support for the Bitcoin network Taproot upgrade! With Taproot everyone wins: network throughput goes up and transactions become more private. We like Taproot."

export const APP_LINKS = [
  {
    href: "https://bitcoincore.org/en/releases/0.21.1/#taproot-soft-fork",
    title: "Taproot migration",
    icon: <IconInfo />,
  },
  { href: "https://www.youtube.com/watch?v=KbF6daItSrw", title: "Video explainer", icon: <IconYoutube /> },
]

export const TWITTER_SHARING_URL =
  "https://twitter.com/intent/tweet?text=If%20your%20coin%20has%20a%20dev%20team%2C%20might%20as%20well%20use%20them%20right%3F%20%F0%9F%99%83%0A%0AGet%20your%20new%20prof%20pic%20flair%20here%20to%20signal%20support%20for%20the%20%23Bitcoin%20Taproot%20upgrade.%0A%0ABetter%20%23throughput.%20%E2%9C%85%20Better%20%23privacy.%20%E2%9C%85%20%23Taproot.%20%F0%9F%9F%A9%0A%0Ahttps%3A%2F%2Ftaproot.fish%0A"

export const DISCLAIMER =
  "We take privacy very seriously. The “TAPROOT MASK” app is provided for fun and convenience. We never store photos, and do not transmit any data besides an anonymous identifier containing no personal information. We have also made the source code available in the event you would like to review it."

export const POWERED_BY = [
  { href: "https://stake.fish/", title: "stakefish" },
  { href: "https://www.f2pool.com/", title: "f2pool" },
]

export const SOCIAL_LINKS = [
  { href: "https://t.me/stakefish", title: "Telegram", icon: <IconTelegram /> },
  { href: "https://instagram.com/stakedotfish", title: "Instagram", icon: <IconInstagram /> },
  {
    type: "dropdown",
    icon: <IconTwitter />,
    data: [
      { name: "f2pool", url: "https://twitter.com/f2pool_official" },
      { name: "stakefish", url: "https://twitter.com/stakefish" },
    ],
  },
  { href: "https://github.com/stakefish/taproot-v2", title: "Github", icon: <IconGithub /> },
]

// === MASK CONFIG ===
export const FILE_NAME = "taproot-mask.png" // name for downloaded image
export const MASK = "static/images/mask.svg"
export const SQUARE = "static/images/green-square.svg"
export const DEFAULT_IMAGE = "static/images/default.png"

export const DEFAULT_COORDS = {
  x: 110,
  y: 180,
}

export const STAGE_WIDTH = 500
export const STAGE_HEIGHT = 520

export const SCALE_FACTOR = 2
export const SCALE_DEFAULT = 1

export const CONTROLLER_ROTATION = 0
export const CONTROLLER_ROTATION_MIN = -180
export const CONTROLLER_ROTATION_MAX = 180

export const CONTROLLER_SIZE = 1.5
export const CONTROLLER_SIZE_MIN = 0
export const CONTROLLER_SIZE_MAX = 2
export const CONTROLLER_SIZE_STEP = 0.01

export const MASK_WIDTH = 200
export const MASK_HEIGHT = 100

export const SQUARE_WIDTH = 160
export const SQUARE_HEIGHT = 160

export const ONE_RADIAN_IN_DEGREES = 180 / Math.PI

export const RENDER_TIME = 250
export const ACTIVE_REF_DEFAULT = 0
