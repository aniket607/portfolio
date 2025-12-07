

export interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  resume?: string;
  mail?: string;
}

/**
 * GitHub username configuration
 * Used across the portfolio for GitHub-related features
 */
export const GITHUB_USERNAME = "aniket607";
export const GITHUB_USERNAME_2 = "aniket-astra";

/**
 * Array of GitHub usernames to display contributions for
 */
export const GITHUB_USERNAMES = [GITHUB_USERNAME, GITHUB_USERNAME_2];

/**
 * Main social links configuration
 */
export const socialLinks: SocialLinks = {
  // twitter: "https://x.com/", 
  github: "https://github.com/aniket607",
  linkedin: "https://www.linkedin.com/in/aniket607/",
  resume: "https://drive.google.com/file/d/1L-GuNSP_PmeJAB4DFibxKU740NscPq3K/view?usp=sharing",
  mail: "mailto:aniketgoyal607@gmail.com",
};

/**
 * Helper function to get social links with optional filtering
 * @param platforms - Array of platform names to include
 * @returns Filtered social links object
 */
export const getSocialLinks = (platforms?: (keyof SocialLinks)[]): SocialLinks => {
  if (!platforms) {
    return socialLinks;
  }
  
  const filteredLinks: SocialLinks = {};
  platforms.forEach(platform => {
    if (socialLinks[platform]) {
      filteredLinks[platform] = socialLinks[platform];
    }
  });
  
  return filteredLinks;
};

/**
 * Check if a social platform is available
 * @param platform - Platform name to check
 * @returns Boolean indicating if the platform link exists
 */
export const hasSocialLink = (platform: keyof SocialLinks): boolean => {
  return Boolean(socialLinks[platform]);
};
