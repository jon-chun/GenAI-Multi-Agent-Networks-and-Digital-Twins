# Remote Cloud Sign-ups and Local Laptop Setups

## IPHS 391: Frontiers of AI - Autonomous Agents

### Jon Chun, Fall 2024

# NOTE

* Gmail account
  * Use your personal gmail.com account
  * Your Kenyon.edu Google account (it has restrictions)
* API Keys
  * We will use a number of API Keys that you need to securely save somehwere (contacts, textfile, etc)
  * NEVER hardcode your API keys into a notebook/python program file
    * Either set it as an unseen environment variable or read it dynamically, e.g.
      * import getpass
      * OPENAI_API_KEY = getpass.getpass("Enter your OpenAI API Key:)
* OpenAI.com subscription
  * First sign-up for $20/mo ChatGPT subscription
  * Then setup API Access: https://platform.openai.com/settings/organization/billing/overview
    * Enter billing credit card infomation under "Payment Methods" (top horizontal menu)
    * Select "Auto recharge is off" to limit maximum spend
    * Add $10 credit to the "Pay as you go" amount
  * Get an secret OpenAI API Key at https://platform.openai.com/api-keys
    * click top right green button labeled "+ Create new secret key"
    * name your key "iphs391" (with default settings)
    * under "Save your key", click green "Copy" button and IMMEDIATELY save it somewhere for future reference (once this popup dialog box closes, you can never view this API Key again)
* Debugging Steps
  * Sometimes the OpenAI API Calls will return ERRORS with invalid model names even with valid model names
    * check the API credit limit is not $0: add $10 non-auto recharge if so and recreate key
    * delete and recreate 'iphs391' API key
    * restart program

# Cloud Service

* NOTE: You cannot use your @kenyon.edu Google gmail account due to enterprise restrictions.  Please use a personal Google account (create one if necessary).

* [Github.com (free)](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
* [Huggingface.co (free)](https://huggingface.co/join)
* [Kaggle.com (free)](https://www.kaggle.com/account/login?phase=startRegisterTab&returnUrl=%2F)
* [Google.com Colab ($10/mo plan)](https://colab.research.google.com/signup)
* [OpenAI.com API ($20/mo + API fees)](https://chatgpt.com/)

* OpenAI API Setup
  * Use non-Kenyon gmail account
  * Signup for $20/mo ChatGPT
  * Allocate $10 NON-AUTORENEW API budget limit
  * Create OpenAI API Key ["iphs391"](https://platform.openai.com/api-keys)
  * Problems recognizing models like 'gpt4-o', may have to delete/recreate API Key
  
# Local Laptop Installations/Setups

* Laptop: Win11, MacOS or Linux
* [MS Edge Browser with Copilot and free GPT4](https://www.microsoft.com/en-us/edge/download?form=MA13FJ)
* Linux Virtual Machine (VM) for Win 11: [WSL2 for Win11](https://learn.microsoft.com/en-us/windows/wsl/install) (Ubuntu 22.04.3 LTS)
* Recommended Terminal App: 
  * [Win11 Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?launch=true&mode=full&hl=en-us&gl=us&ocid=bingwebsearch)
  * [MacOS iTerm](https://iterm2.com/)
* [Python 3.10.14](https://www.python.org/downloads/release/python-31014/)
* Python Libraries (Common, ML, and AI) - In class, over the semester
* Virtual Env: [venv](https://realpython.com/python-virtual-environments-a-primer/) > conda
* Github: [git](https://git-scm.com/downloads) > gh
* [Microsoft VSCode](https://code.visualstudio.com/Download)
* VSCode:
  * [VSCode](https://code.visualstudio.com/)
  * [VSCode Extensions that I Use to INCREASE Productivity with AI (actually useful) (4:06) May 2024](https://www.youtube.com/watch?v=kwfNrWrnZyU): Codiumate and Mintlify
  * [Selections from Chun/Farshid](https://marketplace.visualstudio.com/items?itemName=vscode-extensions-farshid.vscode-extensions-farshid)
    * Python extensions (Microsoft)
    * Jupyter extensions (Microsoft)
    * Codiumate (GenAI Code - Free)
    * ChatGPT Genie AI (GenAI Code - API Key)
    * Mintlify Doc Writer (GenAI Comments/Documentation)
    * Prettier (Color Code Formatter)
    * Code Spell Checker (Spell Checker)
* [Ollama.ai](https://ollama.com/download)


# Github SSH Setup

To generate a Personal Access Token (PAT) for GitHub via the terminal, the process is mostly the same for both Windows and macOS. The difference lies in navigating the terminal environment to open the web browser and set up your SSH keys, if necessary.

Here’s a detailed guide for each operating system.

### For both Windows and macOS:
#### Step 1: Set up SSH keys (if not already set)
You might want to set up SSH keys for more secure authentication. You can skip this step if you've already set up SSH keys.

1. **Generate a new SSH key**:
   Open your terminal (Command Prompt, PowerShell, or Git Bash on Windows, and Terminal on macOS):

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   If you're using an older system that doesn’t support `ed25519`, you can use RSA instead:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

2. **Add the SSH key to the SSH agent**:
   Run the following commands to ensure the SSH agent is running and to add your key:

   ```bash
   # For macOS
   eval "$(ssh-agent -s)"

   # For Windows (Git Bash)
   eval $(ssh-agent -s)

   ssh-add ~/.ssh/id_ed25519  # Adjust the file path if you're using a different key name
   ```

3. **Copy the SSH key to your clipboard**:
   - For **macOS**:
     ```bash
     pbcopy < ~/.ssh/id_ed25519.pub
     ```
   - For **Windows (Git Bash)**:
     ```bash
     clip < ~/.ssh/id_ed25519.pub
     ```

4. **Add the SSH key to your GitHub account**:
   - Go to [GitHub SSH Settings](https://github.com/settings/keys).
   - Click "New SSH Key", paste your key in the box, and give it a recognizable title.
   
#### Step 2: Generate GitHub Personal Access Token (PAT)
Since the process is web-based, it's the same across platforms:

1. **Go to your GitHub account**:
   - Open [https://github.com/settings/tokens](https://github.com/settings/tokens).

2. **Generate a new token**:
   - Click **Generate new token** or **Generate new token (classic)** if you are looking for legacy PATs.
   - Add a **note** (e.g., "For terminal access") to remember the purpose of the token.
   - Select **scopes** that define what the token can do. If you're using this for repository access, check `repo`. If you also need access to other features like Gists, select the appropriate scopes.

3. **Generate and copy the token**:
   - Once generated, GitHub will display the token **only once**. Make sure to copy and store it securely (e.g., in a password manager).

#### Step 3: Use the Personal Access Token (PAT) for Git Authentication
Once you have the token, you can replace your password with this token for Git operations that require authentication (like cloning a repo, pushing, or pulling).

1. **Clone a GitHub repository**:
   Replace `YOUR_PAT` with the token you generated:

   ```bash
   git clone https://<YOUR_GITHUB_USERNAME>:YOUR_PAT@github.com/<YOUR_GITHUB_USERNAME>/<REPO>.git
   ```

   Alternatively, Git should prompt for your username and password when you try to `git clone` or `git push`. Instead of using your password, paste the PAT.

#### Step 4: Store your credentials securely (Optional)
You can configure Git to store your credentials securely so that you don’t have to enter your PAT each time:

- On **macOS**, Git supports the macOS Keychain:
  ```bash
  git config --global credential.helper osxkeychain
  ```

- On **Windows**, Git supports the Windows Credential Manager:
  ```bash
  git config --global credential.helper wincred
  ```

---

### Summary:

1. **Windows** and **macOS** both involve generating SSH keys and using the GitHub web interface to create a Personal Access Token (PAT).
2. SSH keys are for key-based authentication, while PATs can replace passwords in Git operations.
3. Always ensure the PAT is stored securely, as it grants access to your GitHub account based on the scopes you select.

Let me know if you'd like further help with any part of the setup process!