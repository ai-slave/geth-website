export interface LatestReleasesData {
  versionNumber: string;
  releaseName: string;
  urls: {
    LATEST_LINUX_BINARY_URL: string;
    LATEST_MACOS_BINARY_URL: string;
    LATEST_WINDOWS_BINARY_URL: string;
    LATEST_SOURCES_URL: string;
    RELEASE_NOTES_URL: string;
  };
}

export interface ReleaseData {
  release: {
    label: string;
    url: string;
  };
  commit: {
    label: string;
    url: string;
  };
  kind: string;
  arch: string;
  size: string;
  published: string;
  signature: {
    label: string;
    url: string;
  };
  checksum: string;
}

export interface ReleaseParams {
  blobsList: string[];
  isStableRelease: boolean;
}
