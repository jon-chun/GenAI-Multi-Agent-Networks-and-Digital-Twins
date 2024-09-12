import instaloader
import time
from ratelimit import limits, sleep_and_retry

class InstagramScraper:
    def __init__(self):
        self.loader = instaloader.Instaloader()

    @sleep_and_retry
    @limits(calls=1, period=1)  # Limit to 1 call per second
    def download_profile(self, profile_name, download_posts=True, download_stories=False):
        try:
            profile = instaloader.Profile.from_username(self.loader.context, profile_name)
            
            # Download profile picture
            self.loader.download_profilepic(profile)
            
            if download_posts:
                # Download posts
                for post in profile.get_posts():
                    self.loader.download_post(post, target=profile.username)
            
            if download_stories:
                # Download stories
                self.loader.download_stories(userids=[profile.userid])
            
            print(f"Successfully downloaded content from profile: @{profile_name}")
        except instaloader.exceptions.ProfileNotExistsException:
            print(f"The profile @{profile_name} does not exist.")
        except instaloader.exceptions.LoginRequiredException:
            print(f"The profile @{profile_name} is private. Login required.")
        except instaloader.exceptions.ConnectionException as e:
            print(f"Failed to connect: {e}")
        except Exception as e:
            print(f"An error occurred: {e}")

    def login(self, username, password):
        try:
            self.loader.login(username, password)
            print("Successfully logged in.")
        except instaloader.exceptions.BadCredentialsException:
            print("Invalid credentials. Please check your username and password.")
        except Exception as e:
            print(f"Login failed: {e}")

def main():
    # Hardcoded arguments
    profile_to_scrape = "entrapranure"  # The Instagram profile to scrape
    download_posts = True  # Set to False if you don't want to download posts
    download_stories = False  # Set to True if you want to download stories
    login_required = False  # Set to True if login is required (for private profiles)
    username = "allboutaestheics"  # Your Instagram username if login is required
    password = "IPHS391"  # Your Instagram password if login is required

    scraper = InstagramScraper()

    if login_required:
        scraper.login(username, password)

    scraper.download_profile(profile_to_scrape, download_posts, download_stories)

if __name__ == "__main__":
    print("DISCLAIMER: Use this script responsibly and in compliance with Instagram's Terms of Service.")
    main()
    