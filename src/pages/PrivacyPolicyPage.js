import React from 'react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
        <br />
        <h1>Privacy Policy for TradeRun</h1>
        <p className="last-updated">Last Updated: July 6, 2025</p>
        <br />
        <p>
            Welcome to TradeRun! This Privacy Policy describes how TradeRun collects, uses, and
            shares information about you when you download, access, and/or play our mobile
            game TradeRun and use related services.
        </p>
        <p>
            By using our Services, you agree to the collection, use, disclosure, and procedures this
            Privacy Policy describes. Please do not use the Services if you do not agree with this
            Privacy Policy.
        </p>

        <br />
        <h2>1. Information We Collect</h2>
        <p>We collect information in the following ways:</p>

        <br />
        <h3>A. Information You Provide Directly:</h3>
        <ul>
            <li><strong>Onboarding Information:</strong> When you first start the Game, we may ask you to provide information such as your name or nickname, age, and self-assessed trading experience level. To maintain a safe and respectful environment, any username you provide is processed through an automated profanity filter to prevent the use of objectionable language. This information is used to personalize your game experience and for internal analytics.</li>
            <li><strong>Settings and Preferences:</strong> Information you provide when adjusting game settings, such as lot size preferences.</li>
            <li><strong>Communications:</strong> If you contact us directly (e.g., for customer support), we may receive additional information about you, such as your name, email address, the contents of your message, and any other information you choose to provide.</li>
        </ul>

        <br />
        <h3>B. Information Collected Automatically When You Use Our Services:</h3>
        <ul>
            <li><strong>Gameplay Data:</strong> We collect information about your gameplay, such as your virtual portfolio value, trade history, game progress, scores, achievements, level progression, and in-game currency earned (e.g., "TotalCashEarned", "SessionPnLHighScore", “AllTimeHighPortfolioValue").</li>
            <li><strong>Device Information:</strong> We may collect information about the mobile device you use to access our Services, including hardware model, operating system and version, unique device identifiers (like IDFA for iOS or Android Advertising ID for Android), IP address, mobile network information, and device language settings.</li>
            <li><strong>Usage Information:</strong> We collect information about your interaction with our Services, such as features used, time spent in the Game, game session duration, and interactions with advertisements.</li>
            <li><strong>Local Storage (PlayerPrefs):</strong> Some data, like your onboarding completion status, game settings, and local high scores or progress, may be stored locally on your device using Unity's PlayerPrefs system.</li>
        </ul>

        <br />
        <h3>C. Information from Third-Party Services:</h3>
        <ul>
            <li><strong>Firebase:</strong> We use Firebase (a Google LLC service) for various functionalities, including:
                <ul>
                    <li>Firebase Authentication: To manage user accounts (e.g., anonymous sign-in).</li>
                    <li>Firebase Firestore: To store your game progress, leaderboard data, and onboarding information in the cloud, associated with your user ID.</li>
                    <li>Firebase Analytics (or Google Analytics for Firebase): To collect usage data and analytics to help us understand how our Services are used and to improve them.</li>
                </ul>
            </li>
            <li><strong>Advertising Networks:</strong> If our Game includes advertisements, our third-party advertising partners AdMob may collect information using cookies, advertising IDs, and similar technologies to provide personalized ads. This may include device identifiers, IP address, geo-location (if permission is granted), and information about your interaction with ads. Please refer to the privacy policies of our advertising partners for more information on their data collection practices.</li>
            <li><strong>Unity Mobile Notifications:</strong> If you enable reminders, we use Unity's notification system to send local notifications to your device.</li>
        </ul>


        <br />
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul>
            <li>Provide, operate, and maintain our Services, including the core gameplay of TradeRun.</li>
            <li>Personalize your game experience (e.g., displaying your chosen name).</li>
            <li>Improve, optimize, and develop new features for our Services.</li>
            <li>Understand and analyze how you use our Services for analytics and improvement.</li>
            <li>Manage your account and provide customer support.</li>
            <li>Display leaderboards and facilitate competition among players.</li>
            <li>Serve advertisements (if applicable) and measure their effectiveness.</li>
            <li>Send you game-related updates, reminders (if you opt-in), and promotional communications (with your consent, where required).</li>
            <li>Prevent fraud, enforce our terms of service, and comply with legal obligations.</li>
            <li>Maintain the security and integrity of our Services.</li>
        </ul>

        <br />
        <h2>3. How We Share Your Information</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
            <li><strong>Service Providers:</strong> We share information with third-party service providers who perform services on our behalf, such as cloud hosting (Firebase Firestore), analytics (Firebase Analytics), authentication (Firebase Auth), and advertising (Ad Networks). These providers are authorized to use your information only as necessary to provide these services to us.</li>
            <li><strong>Advertising Partners:</strong> If we show ads, we share certain information (like advertising IDs and usage data) with our advertising partners to enable them to deliver targeted advertisements.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, act in urgent circumstances to protect the personal safety of users of the Services, or protect against legal liability.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or other similar event, your information may be transferred as part of the transaction, subject to standard confidentiality agreements.</li>
            <li><strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <br />
        <h2>4. Your Rights and Choices</h2>
        <p>Depending on your location and applicable law, you may have certain rights regarding your personal information:</p>
        <ul>
            <li><strong>Access and Correction:</strong> You may have the right to access and update certain personal information we hold about you (e.g., through in-game settings if available, or by contacting us).</li>
            <li><strong>Data Deletion:</strong> You have the right to request the deletion of your account and associated data. You can initiate this process easily from within the Game by navigating to the Settings menu and using the "Delete Account" button. This will open your device's email client with a pre-filled request, including your anonymous user ID, to help us identify and delete your data from our servers (Firebase). We will comply with such requests where required by law. Please note that deleting your data is permanent and will result in the loss of all your game progress and account information.</li>
            <li><strong>Opt-Out of Targeted Advertising:</strong> You can usually opt out of interest-based advertising on mobile applications by checking the settings of your device (e.g., "Limit Ad Tracking" on iOS or "Opt out of Ads Personalization" on Android) and/ or through the settings of our advertising partners.</li>
            <li><strong>Managing Notifications:</strong> You can manage local reminder notifications through your device's system settings or in-game settings (if available).</li>
        </ul>

        <br />
        <h2>5. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to provide you with the Services, fulfill the purposes described in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. Gameplay data stored locally via PlayerPrefs remains on your device until the app is uninstalled or app data is cleared. Data stored on Firebase will be retained as per our operational needs and legal requirements.</p>

        <br />
        <h2>6. Security</h2>
        <p>We take reasonable administrative, technical, and physical measures to protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free, so you should take special care in deciding what information you send to us.</p>

        <br />
        <h2>7. Children's Privacy</h2>
        <p>Our Services are designed for a general audience. We are committed to protecting the privacy of children who use our Services and comply with the Children's Online Privacy Protection Act (COPPA) and other applicable laws. This section explains our practices with respect to information collected from users identified as being under the age of 13 ("Child" or "Children").</p>
        
        <br />
        <h3>A. Age Gate and Data Handling:</h3>
        <ul>
            <li><strong>Neutral Age Screen:</strong> We present a neutral age screen to all users upon first launch to determine their age.</li>
            <li><strong>Limited Data Collection for Children:</strong> For users identified as Children, we take specific measures to protect their privacy:
                <ul>
                    <li><strong>Username Handling:</strong> If a Child provides a username, it is stored <strong>only locally on their device</strong> and is not transmitted to our servers. As with all users, this username is subject to our automated profanity filter. For online features like leaderboards, we generate a <strong>random, anonymous username</strong> (e.g., "Paris482") that is not tied to any personal information.</li>
                    <li><strong>Data for Internal Operations:</strong> The only information we collect from Children is what is strictly necessary for the internal operations of the Game. This includes a persistent identifier for saving game progress (via Firebase Anonymous Auth) and gameplay data (scores, level, virtual portfolio value) associated with that identifier.</li>
                    <li><strong>Analytics:</strong> We <strong>disable</strong> Google Analytics for Firebase data collection and reporting for all users identified as Children.</li>
                </ul>
            </li>
            <li>We DO NOT knowingly collect personal information from Children beyond what is needed for internal operations.</li>
            <li>We DO NOT use information collected from Children for behavioral advertising or to create user profiles.</li>
        </ul>

        <br />
        <h3>B. Third-Party Services and Children:</h3>
        <ul>
            <li><strong>Firebase (Firestore & Auth):</strong> We use Firebase for core game functionality like saving progress and leaderboards. For Children, all data stored is anonymized and used only to support the game's internal operations, in line with Google's data protection terms.</li>
            <li><strong>Google AdMob (Advertising):</strong> For users identified as Children, we programmatically configure Google AdMob to:
                <ul>
                    <li>Tag all ad requests for <strong>"Child-Directed Treatment"</strong>.</li>
                    <li>This disables interest-based and remarketing ads. Only contextual ads (based on the content of the game) may be shown.</li>
                </ul>
            </li>
        </ul>
        <br />
        <h3>C. Parental Gate for External Links</h3>
        <p>To ensure a safe environment for all our younger players, any links within the Game that lead to an external website or application (such as our support or privacy policy pages) are protected by a neutral parental gate for all users under the age of 18. This gate requires an adult to solve a simple math problem before the link can be accessed, helping to ensure that a parent or guardian is supervising the action of leaving the app.</p>
        <br />
        <h3>D. Parental Rights:</h3>
        <p>Parents and legal guardians of Children have the right to:</p>
        <ul>
            <li>Review the personal information we have collected from their Child.</li>
            <li>Request that we delete the personal information collected from their Child.</li>
            <li>Refuse further collection or use of their Child's personal information.</li>
        </ul>
        <p>To exercise these rights, please contact us at kanchan.nannavare@gmail.com. We will require you to verify your identity before processing such requests to protect your Child's privacy.</p>
        <br />
        <h2>8. International Data Transfers</h2>
        <p>Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer data, including personal information, to the United States (where Firebase servers are primarily located) and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <br />
        <h2>9. Third-Party Links and Services</h2>
        <p>Our Services may contain links to third-party websites or services, or integrate third-party services (like Firebase and Ad Networks). We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information to them.</p>
        <br />
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the "Last Updated" date at the top of this policy and, if required by law, by providing a more prominent notice (such as by adding a statement to our Game's start screen or sending you a notification). We encourage you to review this Privacy Policy periodically for any changes.
        </p>
        <br />
        <h2>11. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
        <ul>
            <li>Kanchan Nannavare</li>
            <li>Email: kanchan.nannavare@gmail.com</li>
            <li>Website: <a href="https://kanchana123.github.io/traderun_website" target="_blank" rel="noopener noreferrer">https://kanchana123.github.io/traderun_website</a></li>
        </ul>
    </div>
  );
};

export default PrivacyPolicyPage;