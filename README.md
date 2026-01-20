# Paddy: Awareness APP

This extension is an application to prevent the user fom risky situation. In according to the BSI guidelines, the extension helps the users to detect unsecure,non complex passwords.

## Background.

This extension is based on my masters thesis "Development of an In-Situ cybersecurity companion". The aim was to create a user awareness for risky situation. The application was simplified for publication. The original application made it possible to detect weak passwords using [Have I Been Pwned](https://haveibeenpwned.com/). It also used the [Safe Browsing API](https://developers.google.com/safe-browsing?hl=en) to detect risky links on websites.

### Concept

The main concept based on the [Fogg Behavior Model](https://dl.acm.org/doi/epdf/10.1145/1541948.1541999), [Explanable Security](https://arxiv.org/pdf/1807.04178) and anthropomorphism.

### Abstract

Cybercrime is responsible for billions of euros in damage annually and poses risks to personal data and companies. It is generally difficult for hackers to overcome technological defences such as firewalls or end point protection and response systems. The user is a weak point in technical defence systems, and social engineering attacks take advantage of this vulnerable link in the chain of protection. Since an intruder can execute a phishing attack to access a protected system, security awareness training is frequently employed to inform and prepare individuals.
ybercrime is responsible for billions of euros in damage annually and poses risks to personal data and companies. It is generally difficult for hackers to overcome technological defences such as firewalls or end point protection and response systems. The user is a weak point in technical defence systems, and social engineering attacks take advantage of this vulnerable link in the chain of protection. Since an intruder can execute a phishing attack to access a protected system, security awareness training is frequently employed to inform and prepare individuals.

However, scientific studies have shown that such training is insufficient and ineffective, failing to raise the security awareness effectively. This master’s thesis addresses this problem by providing a digital companion to increase security awareness among study participants. A 14-day field study was conducted, in which the participants used the companion as a Google Chrome browser extension and desktop application. The desktop application supports Windows and Debian/Ubuntu OS. A t-test demonstrated a significant result when applied to the Security Behavior Intentions Scale (SeBis) and Security Attitudes (SA-6) questionnaires. The System Usability Scale (SUS) and Trust Scale were used for completeness. The System Usability Scale demonstrated high usability, while the Trust Scale suggested that the participants trusted the system. Investigating the effect of anthropomorphism on the decision-making process did not produce clear results.

The data showed an increase in security awareness among the test subjects. However, due to the small sample size (13 participants), the group was not diverse. Consequently, the results are not representative. Additional research with a larger sample size is necessary to confirm the results. Further studies using an A/B-test to compare a digital companion to conventional text messaging are proposed to measure the effect of anthropomorphism.
However, scientific studies have shown that such training is insufficient and ineffective, failing to raise the security awareness effectively. This master’s thesis addresses this problem by providing a digital companion to increase security awareness among study participants. A 14-day field study was conducted, in which the participants used the companion as a Google Chrome browser extension and desktop application. The desktop application supports Windows and Debian/Ubuntu OS. A t-test demonstrated a significant result when applied to the Security Behavior Intentions Scale (SeBis) and Security Attitudes (SA-6) questionnaires. The System Usability Scale (SUS) and Trust Scale were used for completeness. The System Usability Scale demonstrated high usability, while the Trust Scale suggested that the participants trusted the system. Investigating the effect of anthropomorphism on the decision-making process did not produce clear results.

The data showed an increase in security awareness among the test subjects. However, due to the small sample size (13 participants), the group was not diverse. Consequently, the results are not representative. Additional research with a larger sample size is necessary to confirm the results. Further studies using an A/B-test to compare a digital companion to conventional text messaging are proposed to measure the effect of anthropomorphism.

## Requirements

This extension was created and tested for Google Chrome. This extension can also run on other Chromium based browsers such as Opera or Microsoft Edge. This was not tested.

## Requirements for development

- Node version 21.3.0
- NPM version 10.5.1

## How to start

- Open your Chrome Browser and go to the extensions settings: `chrome://extensions/`
- Enable the developer mode (top right corner)
- click on **Load unpacked** and load the folder in which the extension is located.
- The extension has now been successfully installed

## How to use

The extension will message your in the two cases: insecure password. The notification from paddy is displayed on the right side of the browser.

- To validate passwords, go to a page where you can enter a password. If your password does not match with the [BSI password policy](https://www.bsi.bund.de/EN/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html), paddy will message your.

## Development

To work with this extension run

```bash
  npm ci
```

To build and deploy the chrome extension run the following command. This will create an `./build`directory in the root source folder. You can load this folder in your chrome browser. For more read the section [How to start](#how-to-start).

```bash
  npm run build
```

## Author

- [Dominik Liesfeld](mailto:kontakt@bildundbyte.de)
