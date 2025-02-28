import React from 'react';
import { IconProps } from '@chakra-ui/react';
import { WindowsLogo, MacosLogo, LinuxPenguin, SourceBranch } from './components/UI/icons';

export const BORDER_WIDTH = '2px';

// internal pages
export const DOWNLOADS_PAGE = '/downloads';
export const DOCS_PAGE = '/docs';
export const FAQ_PAGE = '/docs/faq';
export const CONTRIBUTING_PAGE = `${DOCS_PAGE}/developers/contributing`;

// external links
export const ETHEREUM_ORG_URL = 'https://ethereum.org';
export const ETHEREUM_ORG_RUN_A_NODE_URL = 'https://ethereum.org/en/run-a-node/';
export const ETHEREUM_FOUNDATION_URL = 'https://ethereum.foundation';
export const GETH_REPO_URL = 'https://github.com/ethereum/go-ethereum';
export const GETH_TWITTER_URL = 'https://twitter.com/go_ethereum';
export const GETH_DISCORD_URL = 'https://discord.com/invite/nthXNEv';
export const GO_URL = 'https://go.dev/';

// Downloads
export const DEFAULT_BUILD_AMOUNT_TO_SHOW = 10;
export const DOWNLOAD_HEADER_BUTTONS: {
  [index: string]: {
    name: string;
    ariaLabel: string;
    buildURL: string;
    Svg: React.FC<IconProps>;
  };
} = {
  linuxBuild: {
    name: 'Linux',
    ariaLabel: 'Linux logo',
    Svg: LinuxPenguin,
    buildURL: ''
  },
  macOSBuild: {
    name: 'macOS',
    ariaLabel: 'macOS logo',
    Svg: MacosLogo,
    buildURL: ''
  },
  windowsBuild: {
    name: 'Windows',
    ariaLabel: 'Windows logo',
    Svg: WindowsLogo,
    buildURL: ''
  },
  sourceCode: {
    name: 'Sources',
    ariaLabel: 'Source branch logo',
    Svg: SourceBranch,
    buildURL: ''
  }
};
export const DOWNLOADS_TABLE_TABS = ['Linux', 'macOS', 'Windows', 'iOS', 'Android'];
export const DOWNLOADS_TABLE_TAB_COLUMN_HEADERS = [
  'Release',
  'Commit',
  'Kind',
  'Arch',
  'Size',
  'Published',
  'Signature',
  'Checksum (MD5)'
];
export const DOWNLOADS_OPENPGP_BUILD_HEADERS = [
  'Build Server',
  'Unique ID',
  'OpenPGP Key',
  'Fingerprint'
];
export const DOWNLOADS_OPENPGP_DEVELOPER_HEADERS = [
  'Developer',
  'Unique ID',
  'OpenPGP Key',
  'Fingerprint'
];

// Metadata
export const SITE_URL = 'https://geth.ethereum.org';
export const SITE_NAME = 'go-ethereum';
export const METADATA = {
  HOME_TITLE: 'Home',
  HOME_DESCRIPTION:
    'Go-ethereum website, home for the official Golang execution layer implementation of the Ethereum protocol',
  DOWNLOADS_TITLE: 'Downloads',
  DOWNLOADS_DESCRIPTION: 'All Geth releases and builds, available for download'
};

// GitHub urls
export const LATEST_GETH_RELEASE_URL =
  'https://api.github.com/repos/ethereum/go-ethereum/releases/latest';
export const ALL_GETH_COMMITS_URL = 'https://api.github.com/repos/ethereum/go-ethereum/commits/';
export const RELEASE_COMMIT_BASE_URL = 'https://github.com/ethereum/go-ethereum/tree/';

// Binaries urls
export const BINARIES_BASE_URL = 'https://gethstore.blob.core.windows.net/builds/';
export const LINUX_BINARY_BASE_URL =
  'https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-';
export const MACOS_BINARY_BASE_URL =
  'https://gethstore.blob.core.windows.net/builds/geth-darwin-amd64-';
export const WINDOWS_BINARY_BASE_URL =
  'https://gethstore.blob.core.windows.net/builds/geth-windows-amd64-';

// Blobs urls
// linux
export const ALL_LINUX_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-linux';
export const ALL_LINUX_ALLTOOLS_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-alltools-linux';

// macOS
export const ALL_MACOS_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-darwin';
export const ALL_MACOS_ALLTOOLS_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-alltools-darwin';

// windows
export const ALL_WINDOWS_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-windows';
export const ALL_WINDOWS_ALLTOOLS_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-alltools-windows';

// android
export const ALL_ANDROID_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-android-all';

// iOS
export const ALL_IOS_GETH_RELEASES_URL =
  'https://gethstore.blob.core.windows.net/builds?restype=container&comp=list&prefix=geth-ios-all';

// Sources urls
export const LATEST_SOURCES_BASE_URL = 'https://github.com/ethereum/go-ethereum/archive/';

// Release notes urls
export const RELEASE_NOTES_BASE_URL = 'https://github.com/ethereum/go-ethereum/releases/tag/';

// Code snippet class constants
export const CLASSNAME_PREFIX = 'language-';
