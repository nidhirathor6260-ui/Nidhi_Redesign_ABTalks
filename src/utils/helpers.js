export function validateGithubUrl(url) {
  if (!url) return { valid: false, error: 'GitHub repository or commit URL is required' };
  const cleaned = url.trim().toLowerCase();
  if (!cleaned.includes('github.com')) {
    return { valid: false, error: 'URL must contain "github.com"' };
  }
  return { valid: true, error: null };
}

export function validateLinkedinUrl(url) {
  if (!url) return { valid: false, error: 'LinkedIn post URL is required' };
  const cleaned = url.trim().toLowerCase();
  if (!cleaned.includes('linkedin.com')) {
    return { valid: false, error: 'URL must contain "linkedin.com"' };
  }
  return { valid: true, error: null };
}

export function formatXP(xp) {
  return xp.toLocaleString();
}
