@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="row">
<div class="offset2 col-md-6">

    <div id="register-body">

        <h2>{{ __('Register a new account') }}</h2>

        <p>{{ __('Sign up for a user account to start buying or selling bitcoins.') }}</p>

        <form method="POST" id="register_form" class="paper-form" action="{{ route('register') }}">
            @csrf


            <div class="form-group">
                <label for="id_username" class="control-label  requiredField">
                    Username<span class="asteriskField">*</span> </label>
                <div class="controls ">
                    <input id="username" type="text" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username') }}" required autofocus>

                    @if ($errors->has('username'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('username') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
            <div class="form-group">
                <label for="id_email" class="control-label  requiredField">
                    Email<span class="asteriskField">*</span> </label>
                <div class="controls ">
                  <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                  @if ($errors->has('email'))
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $errors->first('email') }}</strong>
                      </span>
                  @endif
            </div>
            <div class="form-group">
                <label for="id_password1" class="control-label  requiredField">
                    Password<span class="asteriskField">*</span> </label>
                <div class="controls ">
                  <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                  @if ($errors->has('password'))
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $errors->first('password') }}</strong>
                      </span>
                  @endif
            </div>
            <div class="form-group">
                <label for="id_password2" class="control-label  requiredField">
                    Retype Password<span class="asteriskField">*</span> </label>
                <div class="controls ">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            </div>

                <p>

<div>
<label>Please verify you are a human.</label>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div class="g-recaptcha" data-sitekey="6Le95uoSAAAAAH3LKzssY-LHQOMu6eBag0yqlA6O"></div>
</div>

                </p>


            <p>
              <button id="submit" type="button" class="btn btn-success">
                    {{ __('Register') }}
              </button>
            </p>

            <p>Already have an account? <a href="/login/">Log In.</a></p>
            <p>Forgot password? <a href="/password/reset/">Reset your password.</a></p>

          </div>
        </div>
      </div>
  </div>

  <!-- Terms of service Modal -->
  <div class="modal fade" id="terms_of_service_modal" tabindex="-1" role="dialog" aria-labelledby="terms_of_service_modal" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="terms_of_service_modalTitle">Terms of Service</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="terms_of_service">
 <div class="alert alert-info">
   This updated Terms of Service agreement comes into effect on May 25 2018.
 </div>
 <h1 class="bold-heading just-centered">Terms of Service</h1>
 <br>
 <i class="fa fa-exclamation-triangle"></i> Date of the latest revision: 9th of May 2018.

 <h3 class="bold-heading">Welcome to LocalBitcoins.com</h3>
 <div>
   <p>
     LocalBitcoins.com is a peer-to-peer platform service that enables its users to exchange currency to and from bitcoin. Users can use the platform to create advertisements where they offer to buy or sell bitcoin. Other users reply to these advertisements and the two users can agree to meet to trade bitcoins for cash or complete the trade online. In order for a user to sell bitcoins they ("<strong>seller</strong>") must store the bitcoins in the LocalBitcoins.com web wallet belonging to their account from where the bitcoins are transferred to the user purchasing the bitcoins ("<strong>buyer</strong>") after the seller confirms the buyers payment. All trades on this site are conducted between users of the service. LocalBitcoins.com may help to resolve disputes between buyers and sellers. Acting as an escrow provider, LocalBitcoins.com is not itself a party of any bitcoin trade or transactions conducted by its users.
   </p>
   <p>
     These Terms of Service ("<strong>Agreement</strong>") form a legal agreement covering the provision of services ("<strong>service</strong>" or "<strong>services</strong>") provided by LocalBitcoins Oy ("<strong>LocalBitcoins.com</strong>" or "<strong>LocalBitcoins</strong>" or "<strong>us</strong>" or "<strong>our</strong>" or "<strong>we</strong>") to you as an individual ("<strong>you</strong>" or "<strong>your</strong>"). Your use of the services will be governed by this Agreement, along with the LocalBitcoins.com Privacy Policy. Please read through this Agreement and Privacy Policy carefully before accepting them.
   </p>
 </div>

 <h3 class="bold-heading">Acceptance and Change of Terms</h3>
 <div>
   <p>
     Before you can register an account you must accept our Terms of Service and Privacy Policy. By accepting this Agreement or by using the Service, you expressly acknowledge and agree that you are entering into a legal agreement with LocalBitcoins, and have understood and agree to comply with, and be legally bound by, this Agreement.
   </p>
   <p>
     For changes to these Terms of Service that will significantly affect your rights and obligations we will strive to notify you before the changes take effect. You can terminate this Agreement at any time by concluding any outstanding trades and other obligations, withdrawing any remaining balances and deleting your account.
   </p>
 </div>

 <h3 class="bold-heading">Registration and User Account</h3>
 <div>
   <p>
     To use our services, or to access this site or some of the resources it has to offer, you may be asked to provide registration details in order to register a user account ("<strong>User Account</strong>" or "<strong>account</strong>"). It is a condition of use of this site and our services that all the details you provide are correct, current, and complete. If we believe the details are not correct, current, or complete, we have the right to refuse you access to the site, or any of its resources, and to terminate or suspend your account.
   </p>
   <p>
     To be eligible to use our services you must be at least 16 years old. You may only use your own account at LocalBitcoins.com and you may only have one account registered. You may only act on your own behalf. You may not use your account to act as an intermediary or broker for any person or entity. You are not allowed to sell, borrow, share or otherwise make available your account or any detail necessary to access your account to people or entities other than yourself.
   </p>
   <p>
     You are responsible for maintaining adequate security and control of any and all usernames, passwords, two-factor authentication codes or any other codes or credentials that you use to access the services.
   </p>
   <p>
     Your account must not contain misleading or fraudulent information, including, but not limited to having a non-personal phone number. Creating fake reputation information for your account, faking your country of origin or providing fraudulent identification documents is prohibited.
   </p>
   <h4>Company accounts</h4>
   <p>
     If you wish to use our services as a company or other entity you are required to verify your account as a company. A company-verified account is individual and can only be used by the person who registered it. Company accounts are not allowed to be shared with or used by other individuals or entities.
   </p>
   <p>
     Accounts that are company-verified are allowed the following exemptions from these Terms of Service:
   </p>
   <ul>
     <li>
       A company may have several active user accounts at any time, provided they are all company-verified and operated by a single employee of the company. A single employee may only register and operate a single account.
     </li>
     <li>
       A company may have active advertisements from several accounts with the following exceptions:
     </li>
     <li>
       Ads are not allowed to overlap between accounts. E.g. you’re not allowed to create advertisements using the same limits with the same price in the same payment method category in the same country.
     </li>
 </div>

 <h3 class="bold-heading">Identity Verification</h3>
 <div>
   <p>
     In order to ensure LocalBitcoins remains a safe platform for all of our customers we may require you to verify your identity to access part of the services we offer. Identity verification may be required when you create advertisements, pass certain trade volume limits, during trade disputes, fraud investigations, and to ensure account ownership. As part of our ID verification process we require you to provide us with your full name as well as documents and photographs that verify your identity.
   </p>
   <p>
     In certain situations we may require enhanced identity verification. This may include requirements to verify details or sources of funds regarding payments you have made or received during trades on LocalBitcoins as well as bitcoin transactions that you’ve sent or received from your LocalBitcoins account.
   </p>
   <p>
     ID verified accounts have a clear owner which makes it easy to return access to you if you lose all access to your account. It is very hard or impossible to return access to accounts that are unverified, even if you know your username, as it is difficult to identify the original account owner.
   </p>
 </div>

 <h3 class="bold-heading">Bitcoin Trading</h3>
 <div>
   <p>
     You can initiate bitcoin trades ("<strong>trade</strong>"" or "<strong>contact</strong>") to either buy or sell bitcoin by sending trade requests to advertisements created by other users.
   </p>
   <p>
     By sending a trade request you agree to be bound by the terms and conditions of the trade as selected and determined by the advertiser (whether by selecting from options available to advertiser for advertisements or by any freeform terms and conditions set out by the advertiser in the <i>Terms of trade</i> field) and displayed on the advertisement page. The terms and conditions specified by the advertiser are valid in all cases except when they contradict or violate these Terms of Service, are unreasonable or otherwise difficult to comply with, are illegal, or if both parties of the trade consent to alter the terms and conditions of the trade.
   </p>
   <p>
     The exchange rate, bitcoin amount, payment window, payment method and other terms and conditions of the trade that are visible on the advertisement page prior to sending a trade request cannot be altered once a trade request has been sent and the trade has started.
   </p>
   <p>
     When you are selling bitcoin it is your responsibility to check that you have confirmed, independent of the buyer and their payment evidence, that you have received payment for the full amount, that the payment is not made by a third party to the trade, and that it was made according to your instructions given to the buyer. After you have released a trade to the buyer it is not possible to cancel, reverse, dispute or otherwise recover or return the bitcoins to you.
   </p>
   <p>
     Payments made by buyers must be sent by the same person that registered and uses the account. Payment details provided by sellers must match the name of the LocalBitcoins account holder. Making, providing, or attempting to make or provide payments to or from third parties is considered a violation of this agreement.
   </p>
   <p>
     All communication relevant to the trade must happen in the trade chat part of the trade in such a way that it is readily available for LocalBitcoins support staff to review. Communication that has not occurred on LocalBitcoins or that has been hidden, encrypted or otherwise obstructed from view is not taken into consideration during dispute review and dispute resolution.
   </p>
 </div>

 <h3 class="bold-heading">Disputing Bitcoin Trades</h3>
 <div>
   <p>
     When a buyer and a seller are in disagreement over a trade either party or LocalBitcoins can start a dispute ("<strong>Disputed trade</strong> or "<strong>dispute</strong>"") to initiate a mediation process on the bitcoin held in escrow. Disputed trades are reviewed and resolved by LocalBitcoins.com support staff.
   </p>
   <p>
     Disputes can only be started on trades that are open and marked as paid by the buyer. Trades that are not marked as paid by the buyer, have been released by the seller, cancelled by the buyer, automatically cancelled, or already disputed and resolved are considered completed and cannot be disputed, reversed, or altered.
   </p>
   <h4>Unresponsiveness</h4>
   <p>
     When you are involved in a bitcoin trade it is important that you remain active and available from the time the trade is started to the time that the trade is completed, canceled, or resolved. This means that you must be able to provide a response to a request by LocalBitcoins support in a disputed trade within 12 hours or you may be deemed as unresponsive and the dispute may be resolved against you.
   </p>
   <h4>Dispute review</h4>
   <p>
     During a dispute review LocalBitcoins support may give you instructions that you are required to follow. The instructions given to you may require you to provide proof of payment, proof that you have or have not received payment (e.g. bank transaction history), additional ID verification, photo; audio; or video evidence, or any other documents deemed relevant by LocalBitcoins. Unless otherwise specified by LocalBitcoins, these documents must be added to the disputed trade itself. Failure to follow the instructions may lead to the dispute being resolved against you.
   </p>
   <h4>Dispute resolution criteria</h4>
   <p>
     A disputed trade is most commonly resolved by LocalBitcoins support moving the escrowed bitcoin to the buyer or the seller of the disputed trade once the dispute resolution criteria are met.
   </p>
   <p>
     In rare situations where neither party fulfill the criteria, or it is in other ways unclear or not possible to determine which party has fulfilled the dispute resolution criteria, LocalBitcoins may decide to resolve the dispute by splitting the escrowed bitcoin between the buyer and the seller evenly or unevenly.
   </p>
   <h4>Dispute resolution criteria</h4>
   <p>
     LocalBitcoins can resolve a disputed trade to a bitcoin buyer when one of the following criteria are met:
   </p>
   <ul>
     <li>
       The buyer has made payment according to the instructions provided by the seller in the trade chat, advertisement terms of trade, or advertisement payment details and the buyer has provided sufficient proof that the payment was made according to these instructions.
     </li>
     <li>
       The seller has become unresponsive.
     </li>
   </ul>
   <p>
     LocalBitcoins can resolve a disputed trade to a bitcoin seller when one of the following criteria are met:
   </p>
   <ul>
     <li>
       The buyer has not provided payment or not provided payment in full
     </li>
     <li>
       The buyer has become unresponsive
     </li>
     <li>
       The payment made by the buyer has been held/frozen/stopped by the payment provider
     </li>
     <li>
       The buyer has not provided payment according to the instructions provided to them by the seller in the trade chat, advertisement terms of trade or advertisement payment details.
     </li>
     <li>
       The payment is made by a third party to the trade OR the payment is made from a payment account not registered in the name of the buyer.
     </li>
   </ul>
   <p>
     If the buyer or the seller of a disputed trade provides fraudulent information or fraudulent documents or makes false claims or otherwise tries to force a certain outcome of a disputed trade the dispute may be immediately resolved against the user.
   </p>
   <h4>Incorrect dispute resolution</h4>
   <p>
     If you believe LocalBitcoins has resolved a dispute you are a party of in a way which is not in accordance with these terms you have a right to request a review. To request a review you need to notify us and specifically request a review by contacting customer support no later than 120 days after the dispute resolution.
   </p>
 </div>

 <h3 class="bold-heading">Advertisements</h3>
 <div>
   <p>
     You can create bitcoin trade advertisements ("<strong>advertisement</strong>"" or "<strong>ad</strong>" or "<strong>ads</strong>") to advertise that you want to buy or sell bitcoins. Other users can send trade requests to you from the advertisements that you’ve created. When a trade request is sent to you a bitcoin trade is automatically started.
   </p>
   <p>
     When you have advertisements enabled you are required to be active and available to reply to trades started from these advertisements. If a dispute is initiated in a trade against an advertiser who is not active and available the advertiser may be deemed unresponsive as per this agreement and the dispute may be resolved against them.
   </p>
   <p>
     Information and payment details you provide in advertisements and trades must at all times be correct and up to date. Disputes may be resolved against you if you include out-of-date payment details and a buyer completes payment accordingly. Refusal to complete trades or to provide payment details for trades opened from your advertisements is considered a violation of this agreement.
   </p>
   <p>
     The price or price equation that is defined in the advertisement details must contain any and all fees that the advertiser requires the buyer to pay. After initiation of a trade the price is locked and cannot be changed or any additional fees added without consent from both parties of the trade.
   </p>
   <h4>Local Cash Advertisements</h4>
   <p>
     Local Cash advertisements are advertisements in the categories "Buy bitcoins locally" and "Sell bitcoins locally" or any other advertisement where the payment method is specified as cash or where the advertisement type is local sell or local buy.
   </p>
   <ul>
     <li>
       Multiple ads per city are not allowed unless the ads are limited to different customer groups and have a price difference of at least 3 %.
     </li>
   </ul>
   <h4>Online advertisements</h4>
   <p>
     Online advertisements are advertisements in the categories "Buy bitcoins online" and "Sell bitcoins online" or any other advertisement where the payment method is any other than cash or the advertisement type is online buy or online sell.
   </p>
   <ul>
     <li>
       You must place your ads in the correct payment category.
     </li>
     <li>
       Multiple ads for the same payment method are not allowed in the same country unless the ads are limited to certain customer groups and the advertisements have a price difference of at least 3%.
     </li>
   </ul>
 </div>

 <h3 class="bold-heading">Limitation, Suspension, and Termination of Your User Account</h3>
 <div>
   <p>
     Occasionally situations arise where we may need to limit, suspend, or terminate your account. Account limitation ("<strong>limit</strong>", "<strong>limitation</strong>") results in a temporary or permanent loss of access to a certain specific part or parts of the services we offer. Account suspension ("<strong>suspension</strong>", "<strong>block</strong>", "<strong>ban</strong>") results in a temporary loss of access to most parts of the services we offer. Account termination ("<strong>termination</strong>", "<strong>permanent ban</strong>") results in permanent loss of access to all services we offer as well as termination of this Agreement.
   </p>
   <p>
     We have the right to, limit, suspend, or terminate your account or access to the services that we provide to you if:
   </p>
   <ol>
     <li>
       we have a reason to believe that you have acted in violation of these Terms of Service or applicable laws or regulations or if we have a reason to believe that any content or material submitted or shared by you in or through the services violates these Terms of Service or applicable laws or regulations or third party rights;
     </li>
     <li>
       we suspect that you use the services to engage in, attempt to engage in, or in connection with fraudulent activity, money laundering, terrorist financing or other financial crime;
     </li>
     <li>
       we have reason to believe that you have supplied false, misleading or deceptive information in connection with your registration, identity verification, trades or any other use of our services, either to us or to another user;
     </li>
     <li>
       we are required to do so under any applicable law, regulation or an order issued by an authority;
     </li>
     <li>
       make available content or behave in a way that libels, defames, invades privacy, stalks, is obscene, pornographic, racist, abusive, harassing, threatening or is offensive;
     </li>
     <li>
       if you use the services in a manner which may cause the services to be interrupted or damaged or such a way that the functionality of the services is in any way impaired or attempt to bypass or break any security mechanism of the services or if LocalBitcoins believes in good faith that such action is reasonably necessary to protect the security of its services or its property or brand or the security, property and rights of its users or those of third parties;
     </li>
     <li>
       attempt any unauthorized access to user accounts or any part or component of the service.
     </li>
   </ol>
   <p>
     We will normally give you a notice of any limitation, suspension, or termination of your account but we may, if it is reasonable to do so (for example we consider it advisable for security reasons), limit, suspend or terminate your account without prior notice to you.
   </p>
   <p>
     You acknowledge that our decision to limit, suspend, or terminate your account, may be based on confidential criteria that are essential to our risk management and security protocols and that we are under no obligation to disclose the details of our risk management and security procedures to you.
   </p>
   <p>
     In the event that we limit, suspend or terminate your account we will lift the suspension as soon as possible once the reasons for the suspension or termination no longer exist.
   </p>
 </div>

 <h3 class="bold-heading">Limiting Access to Your LocalBitcoins Wallet</h3>
 <div>
   <p>
     In certain situations your ability to access, conduct bitcoin transactions, or start trades using bitcoin held in your LocalBitcoins wallet may be limited.
   </p>
   <p>
     This limitation may be applied specifically to your account in order to safeguard bitcoin stored in your wallet when we e.g. suspect a third party has gained unauthorized access to your account; if we suspect you of engaging in or being involved in fraudulent or illegal activity; if we are provided with valid legal request from an authority.
   </p>
   <p>
     This limitation may be applied generally to all users or a subset of our users during service outages or maintenance outages of the website; during bitcoin hardforks or other situations where we believe there is a high risk to your bitcoin balance.
   </p>
   <p>
     In the event that we limit access to your wallet we aim to remove the limitation as soon as possible once the reasons for the suspension or termination no longer exist.
   </p>
   <p>
     We will normally give you a notice of any limitation of access to your wallet but we may, if it is reasonable to do so (for example we consider it advisable for security reasons), limit access to your wallet without prior notice.
   </p>
   <p>
     You acknowledge that our decision to limit access to your wallet may be based on confidential criteria that are essential to our risk management and security protocols and that we are under no obligation to disclose the details of our risk management and security procedures to you.
   </p>
 </div>

 <h3 class="bold-heading">Fees and Pricing</h3>
 <div>
   <p>
     The services are provided to you against fees determined on a per transaction and/or per trade basis in accordance with the prices and pricing principles set out on our website. Such fees may include fees for incoming and outgoing transactions, percentage based fees for trades completed, and percentage based fees for merchant invoicing services deducted from the paid invoice amount.
   </p>
   <p>
     Unless otherwise specified fees are automatically deducted from your LocalBitcoins wallet balance or deposit at the time when the service is rendered or completed.
   </p>
 </div>

 <h3 class="bold-heading">Supporting Blockchain Forks and Other Cryptocurrencies
 </h3>
 <div>
   <p>
     From time to time, new and alternative cryptocurrencies and/or forks of the bitcoin blockchain may be created. This may result in holders of private keys containing a bitcoin balance receiving a corresponding amount of the new cryptocurrency on the newly created blockchain (“air-drop”). We reserve the right at our sole discretion to decide if and how we support any new cryptocurrencies and/or blockchain forks in our services including defining which blockchain shall be deemed as bitcoin within the meaning of this Agreement. We strive to communicate our decisions concerning any significant new forks or cryptocurrencies on our website in a timely manner. If we decide to not support a new cryptocurrency we may, but are not obligated to, compensate users who held bitcoin in their LocalBitcoins account at the time of the air-drop in a manner deemed appropriate by us. We reserve the right to provide compensation by converting all of the available new cryptocurrency to bitcoin and sharing all of the converted bitcoin between users who held a bitcoin balance on their account at the time of the creation of the new cryptocurrency. In case such a conversion takes place we may charge you a processing fee in any amount deemed reasonable by us at our sole discretion but not exceeding the amount of compensation payable to you.
   </p>
   <p>
     If we decide to support a new cryptocurrency, unless otherwise communicated by us, these Terms of Service, including any reference to bitcoin, shall be equally applied to the new cryptocurrency.
   </p>
   <p>
     We cannot guarantee that the decisions we take under this Section will be suitable, desirable or practical to you. If you are concerned about our decisions, stances or the lack thereof regarding any given blockchain fork or new cryptocurrency, we recommend that you withdraw your balance and handle the situation on your own as you see fit. We are not in any circumstance liable for any damage, losses, expenses or harm resulting to you from the use of our rights under this Section.
   </p>
 </div>

 <h3 class="bold-heading">Allowed Jurisdictions</h3>
 <div>
   <p>
     To use services provided by LocalBitcoins you may need to fulfil certain legal obligations in your country and/or state of residence. By accepting these terms and service you confirm that you have reviewed your local laws and regulations and that you are aware of, and fulfill, any and all such obligations.
   </p>
   <p>
     LocalBitcoins does not offer the use of its services in certain jurisdictions, by accepting these terms of service you confirm that you are not a resident or governed by the laws and regulations of the Federal Republic of Germany as well as the States of New York and Washington in the United States of America.
   </p>
 </div>

 <h3 class="bold-heading">Intellectual Property Rights</h3>
 <div>
   <p>
     You acknowledge and agree that all copyrights, trademarks and all other intellectual property rights in and related to this site and our services is exclusively the property of LocalBitcoins and our licensors. We grant you a revocable, non-exclusive, non-sublicensable, non-transferable and limited license, subject to the terms of this Agreement, to access and use our site and service, as well as related content, materials and information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of the Content is expressly prohibited and you agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole or in part.
   </p>
 </div>

 <h3 class="bold-heading">Disclaimer of Warranties and Limitation of Liability</h3>
 <div>
   <p>
     This site and the services are provided on an “as is” and “as available” basis for your information and use without any representation or endorsement. To the maximum extent permitted by applicable law, we make no warranties of any kind, whether express or implied, in relation to the site or the services, including but not limited to, implied warranties of satisfactory quality, functionality, fitness for a particular purpose, non-infringement, compatibility, security, accuracy, condition or completeness, or any implied warranty arising from course of dealing or usage or trade.
   </p>
   <p>
     LocalBitcoins Oy or LocalBitcoins.com is not associated with or does not itself support or claim to be in partnership with any of the payment methods, services or companies which may appear visible in the Online Payment method lists or advertisement details. Also, services provided by LocalBitcoins Oy or LocalBitcoins.com are not authorized, approved, endorsed or sponsored by any of the payment methods listed on the website or their respective trademark owners. Payment method listings are visible on LocalBitcoins.com for informative purposes only.
   </p>
   <p>
     LocalBitcoins is not responsible for any user-generated content on its site including but not limited to messages, feedbacks or advertisements but may remove or modify said content without notice or liability at any time in its sole discretion.
   </p>
   <p>
     This site may contain links to other sites on the Internet. These sites may contain information or material that some people may find inappropriate or offensive. These other sites are not under the control of LocalBitcoins.com, and you acknowledge that (whether or not such sites are affiliated in any way with LocalBitcoins.com) LocalBitcoins.com is not responsible for the accuracy, legality, decency, or any other aspect of the content of such sites.
   </p>
   <p>
     LocalBitcoins.com reserves the right to modify or discontinue, temporarily or permanently, all or any part of this site and/or any software, facilities and services on this site, with or without notice, and/or to establish general guidelines and limitations on their use.
   </p>
   <p>
     If and to the maximum extent permitted by applicable law, we will not be liable for:
   </p>
   <ol>
     <li>
       any economic losses (including without limitation loss of revenues, profits, contracts, business or anticipated savings);
     </li>
     <li>
       any loss of goodwill or reputation;
     </li>
     <li>
       any special or indirect or consequential losses, howsoever arising
     </li>
   </ol>
   <p>
     in any case whether or not such losses were within the contemplation of either of us at the date on which the event giving rise to the loss occurred. Without limitation, you (and not us) assume the entire cost of all necessary servicing, repair or correction or correction in the event of any such loss or damage arising.
   </p>
   <p>
     Nothing in these Terms of Service shall exclude or limit our liability based on willful conduct or gross negligence. If and to the extent applicable law does not allow the above limitations of warranty and liability, such limitations shall not apply to you.
   </p>
   <p>
     Notwithstanding any other provision in these Terms of Service, nothing shall limit your rights as a consumer under mandatory provisions of applicable consumer protection legislation.
   </p>
 </div>

 <h3 class="bold-heading">Indemnity</h3>
 <div>
   <p>
     You agree to be fully responsible for (and fully indemnify us against) all claims, liability, damages, losses, costs and expenses, including legal fees, suffered by us and arising out of or related to any breach of this Agreement by you or any other liabilities incurred by us arising out of your use of the services, or use by any other person accessing the services using your user account, device or internet access account; or your violation of any law or rights of any third party.
   </p>
 </div>

 <h3 class="bold-heading">General</h3>
 <div>
   <p>
     We may transfer or assign our rights and duties under this Agreement to any party at any time without notice to you, but this will not affect your rights or our obligations under this Agreement. You may not, however, transfer or assign any of your rights and duties under this Agreement to any other party.
   </p>
   <p>
     This Agreement (as amended from time to time) contains the entire agreement and understanding between us in respect of all matters which are referred to herein and supersedes any prior written or oral agreement between us relating to such matters. No oral explanation or oral information given by either of us shall alter the interpretation of this Agreement. You confirm that, in agreeing to accept this Agreement, you have not relied on any representation that is not expressly included herein and you agree that you shall have no remedy in respect of any misrepresentation which has not become a term of this Agreement. However, nothing in this Agreement purports to exclude liability for any fraudulent statement or act.
   </p>
   <p>
     If any part of provision this Agreement is deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed to be severable from this Agreement and shall not affect the validity and enforceability of any of the remaining provisions of the Agreement.
   </p>
   <p>
     Our failure to enforce any right or provision in this Agreement will not constitute a waiver of such right or provision unless acknowledged and agreed to by us in writing. Except as expressly set forth in this Agreement, the exercise by either party of any of its remedies under this Agreement will be without prejudice to its other remedies under this Agreement or otherwise permitted under law.
   </p>
   <p>
     You agree that this Agreement and any dispute between you and us shall be governed in all respects by the laws of Finland, without regard to their choice-of-law provisions, and excluding the application of the 1980 U.N. Convention on Contracts for the International Sale of Goods. Except if prohibited and without limitation to any statutory rights for consumers under applicable consumer protection laws, you agree that all disputes, claims and proceedings arising out of or relating to the services shall be resolved by the competent courts of Helsinki, Finland. However, we shall always have the right to take legal proceedings in the court of competent jurisdiction of your domicile. All claims shall be brought within one (1) year after the claim arises. Failure of either party to exercise in any respect any right under this Agreement shall not be deemed to be a waiver of such right.
   </p>
   <p>
     The services are controlled and offered by us from Finland. We make no representations that the services are appropriate or available for use in other countries. Users of LocalBitcoins.com are themselves responsible for making sure they are in compliance with legislation of the jurisdiction they operate and reside in.
   </p>
 </div>
</div>

       <div align="right">
         <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
         <button type="button" class="btn btn-success" id="tos_agree_button" data-toggle="modal" data-target="#privacy_policy_modal">I Agree</button>
       </div>
     </div>
        </div>

      </div>
    </div>



<!-- Modal, Privacy Policy -->
<div id="privacy_policy_modal" class="modal fade" role="dialog">
<div class="modal-dialog modal-lg">
<!-- Modal content-->
<div class="modal-content">
  <div class="modal-body modal-pp">
    <div id="privacy_policy">
<div class="alert alert-info">
The updated Privacy Policy comes into effect on May 25 2018.
</div>
<h1 class="bold-heading just-centered">Privacy Policy</h1>
<br>
<i class="fa fa-exclamation-triangle"></i> Date of the last revision: 9th May 2018

<h3 class="bold-heading">1. Introduction</h3>
<div>
<p>
  1.1 LocalBitcoins Oy ("<strong>we</strong>") are committed to safeguarding the privacy of our data-subjects ("<strong>you</strong>" or "<strong>user</strong>); in this policy we explain how your personal data, meaning any information relating to you as an identified or identifiable natural person, that we may hold about you, is collected, used, stored, disclosed, and removed (each and all referred to as "<strong>processing</strong>").
</p>
<p>
  1.2. We do not collect any personally identifiable information from children under the age of 16. If you believe that a child under the age 16 has provided us with personally identifiable information, please contact our customer support.
</p>
<p>
  1.3. This Policy only applies to information we process. It does not apply to the practices of companies that we don't own or control, or employees that we don't manage. Information on our services’ may contain links to third party websites, and any information you provide to those sites will be covered by any privacy policies they may have. Please be sure to read the privacy policies of any third-party sites you visit. It is those sites' responsibility to protect any information you give them, so we can't be held liable for their wrongful use of your personally identifying information.
</p>
<p>
  1.4. We may update this policy from time to time and will notify you of changes to this policy affecting your rights by email and/or by posting on our website at LocalBitcoins.com.
</p>
</div>

<h3 class="bold-heading">2. Your Personal Data and How We Use It</h3>
<div>
<p>
  2.1.  In this Section 2 we set out:
</p>
<ul>
  <li>
    the general categories of data and types of personal data that we may process;
  </li>
  <li>
    the source of that personal data;
  </li>
  <li>
    the purposes for which we may process personal data; and
  </li>
  <li>
    the legal bases of the processing.
  </li>
</ul>
<p>
  2.2. We may process your registration data ("<strong>registration data</strong>"). Registration data may include your username and email address. The source of the registration data is you. Registration data is required in order for you to be able to use the service. The legal bases for this processing are consent and the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract;
</p>
<p>
  2.3. We may process your account data (<strong>account data</strong>"). Account data may include your full name, email address, username, country and telephone number. The source of the account data is you. The account data may be processed for the purposes of providing our services, ensuring the security of our users and services, and communicating with you. Users may need to set their full name to their user profile before buying bitcoins online from some traders. Full name is only shown to bitcoin sellers with whom user has opened trades. Verifying the full name helps protecting users against fraudulent payments, increase user’s trustworthiness, and provides an alternative way to access user’s LocalBitcoins wallet in case the password is lost or the account is hacked. Phone number is used for notification purposes and is an alternative mechanism to identify users in case the password is lost or account gets hacked. The legal bases for this processing are consent; the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract; and our legitimate interests, namely the operation of our business model.
</p>
<p>
  2.4. We may process your identity documents ("<strong>ID data</strong>"). Verifying account with an ID is currently mandatory to all advertisers and users whose trading volume exceeds certain limit. ID may contain your full name, country, date of birth, social security number and gender. The purpose for ID data is to protect our users from fraud and helps us to prevent, detect and investigate fraud, money laundering, criminal activity or other misuse of our service. Moreover, by requiring all advertisers to ID verify will help us to provide a more trustworthy, safe and reliable trading experience for our customers. ID creates a strong assumption about the ownership of the account and thus ensures that we can return access to your account in case your account is hacked. Legal bases for this processing are consent and legitimate interests of ours and/or by third-parties, namely to prevent, detect and investigate fraud, criminal activity or other misuse of the services and to prevent security issues.
</p>
<p>
  2.5. We may process data about your use of our website and services ("<strong>usage data</strong>"). Usage data is primarily non-personally-identifying information of the sort that web browsers, servers, and services like Google Analytics typically make available, such as the browser type, language preference, referring site, and the time of each visit. Other non-identifying information that we might have access to includes how you use the service (e.g. search queries), your approximate location, cookies set by our site, etc. Usage data may include: 1) Data that we collect mainly for behaviour statistics, business intelligence and email campaigns ("<strong>analytics data</strong>"). We gather website traffic data with the help of Google Analytics. We gather event based tracking data with the help of Mixpanel, and this data may also contain your email address, IP address and country code. 2) Data that we collect mainly for technical, security and/or fraud prevention reasons or for tracking errors ("<strong>technical data"</strong>). We gather data on website errors with the help of Sentry which may occasionally contain usage data. We also log certain events from your actions on our site. The legal basis for this processing is our legitimate interests of ours and/or by third-parties, namely to monitor service quality and improve our website and services as well as to prevent, detect and investigate fraud, criminal activity or other misuse of the services and to prevent security issues.
</p>
<p>
  2.6. We may process data relating to your trades that you conduct through our website ("<strong>trade data</strong>"). The trade data may include trade ID, initiated trades, payment method, advertisement information, buyer username, seller username, trade value (in fiat), trade value (in bitcoin), bitcoin price, currency, timestamps of trade and trade chats as well as possible merchant invoice information and ATM trade data. The source of the trade data is you and your trading partner. The legal bases for this processing are consent; the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract and our legitimate interests, namely the operation of our business model.
</p>
<p>
  2.7. We may process data relating to bitcoin transactions in and out of your bitcoin wallet ("<strong>bitcoin transaction data</strong>"). Information stored on received transactions may include timestamp, bitcoin amount, deposit address (unique) and transaction ID and other publicly available data from the bitcoin blockchain. Withdrawal transactions may include data such as timestamp, bitcoin amount, sent address, transaction ID, and description. The source of the trade data is you and/or your trading partner. The legal bases for this processing are consent; the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract and our legitimate interests, namely the operation of our business model.
</p>
<p>
  2.8. We may process information contained in or relating to any communication that you send to us or what you generate through the use of our service ("<strong>communication data</strong>"). Communication data includes 1) all your messages, requests and other communication with our customer support which may happen during the dispute review process or via support tickets, emails, or by means of any other communication tool; and 2) all your communication and file attachments that you generate when conducting trades with other users ("<strong>trade chat messages"</strong>) or other data that you generated mainly by communicating to other users. Communication data may include, email address, username, IP address, full name, audio and video files and in the case of manual ID verification: photo of the user’s personal ID, photo of the user, and photo of the user’s utility bill or related document. The communication data may be processed for the purposes of communicating with you, record-keeping, in order to review and resolve disputes, serve our customers better and improve our service. The legal basis for this processing is our legitimate interests, namely the proper administration of our website and business.
</p>
<p>
  2.9. We may process information that you provide to us for the purpose of subscribing to our email notifications, SMS notifications and/or newsletters ("<strong>notification data</strong>"). The notification data may include your email address, phone number, username and full name. The notification data may be processed for the purposes of sending you the relevant notifications and/or newsletters. The legal basis for this processing is consent. You can unsubscribe at any point by contacting us or by clicking the unsubscribe link in the email.
</p>
<p>
  2.10. In connection with the activities described above, we may conduct profiling based on your interactions with and content that you provide to our service, and/or information obtained from external services (described in Section 4). In limited cases, automated processes may restrict or suspend access to our service if such processes detect activity that we think poses a safety or other risk to our service, our users or third parties. We process this information given our legitimate interests in protecting our service and brand; preventing, detecting and investigating fraud, criminal activity or other misuse of the services; optimizing the products and services offered and/or complying with applicable laws.
</p>
<p>
  2.11. We may process any of your personal data when necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or outside the court procedure. The legal basis for this processing is our legitimate interests, namely the protection and assertion of our legal rights, your legal rights and the legal rights of others.
</p>
<p>
  2.12. In addition to the specific purposes for which we may process your personal data set out in this Section 2, we may also process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.
</p>
<p>
  2.13. All the aforementioned general categories of data may contain data that by itself does not identify you and is therefore not deemed as personal data.
</p>
<p>
  2.14. Please try to avoid supplying any unnecessary personal data to us.
</p>
</div>

<h3 class="bold-heading">3. Information You Choose to Display Publicly on Our Services</h3>
<div>
<p>
  3.1. Some users may elect to publicly post personally identifying or sensitive information about themselves in their normal use of our services. This could occur through use of optional profile fields, in interactions on public boards, and using our forum at localbitcoins.com, or if a previously private interaction is made public. Information like that, which is voluntarily posted in publicly visible parts of our services, is considered to be public, even if it would otherwise be considered to be personally identifying or sensitive. As such, it is not subject to the protocols listed below, because we don't control it; you do. Additionally, voluntarily publicizing such information means that you lose any privacy rights you might normally have with regards to that information. It may also increase your chances of receiving unwanted communications, like spam.
</p>
<p>
  3.2. Please also remember that if you choose to provide personally identifiable information using certain public features of our services, individuals reading such information may use or disclose it to other individuals or entities without our control and without your knowledge, and search engines may index that information. We therefore urge you to think carefully about including any specific information you may deem private in content that you create or information that you submit through our Services.
</p>
</div>

<h3 class="bold-heading">4. Providing Your Personal Data to Others</h3>
<div>
<p>
  4.1. In this Section 4 we set out:
</p>
<ul>
  <li>
    External services ("<strong>processors</strong>") that we use for processing personal data on behalf of us;
  </li>
  <li>
    Types of personal data that processors may process;
  </li>
  <li>
    The reason for using them.
  </li>
</ul>
<p>
  4.2. For processing ID data, we use netverify service by Jumio Corporation ("<strong>Jumio</strong>"), a company located in the United States. ID may contain your full name, country, date of birth, social security number and gender.
</p>
<p>
  4.3. For behaviour statistics, business intelligence and email campaigns we use the service by Mixpanel Inc ("<strong>Mixpanel</strong>"), a company located in the United States and for behaviour statistics and business intelligence also the service by Google LLC ("<strong>Google Analytics</strong>"), a company located in the United States. Data that we may provide to Mixpanel may include your email address, IP address and country code and that data is used by Mixpanel to generate information about your usage of our service. Data that we may provide to Google Analytics may include your IP address and that data is used by Google Analytics to generate information about your usage of our service. The reason for using them both is that their tracking methods differ considerably and we use them for those different purposes: Mixpanel is focused on event and behaviour tracking as well as for sending informational messages while Google Analytics is more focused on page views.
</p>
<p>
  4.4. For tracking server errors, we use the service by Functional Software Inc ("<strong>Sentry</strong>"), a company located in the United States. Error messages are rare but they may include your IP address. Sentry is used for monitoring and fixing errors and crashes.
</p>
<p>
  4.5. For processing notification data, we use the service by SendGrid Inc ("<strong>SendGrid</strong>"), a company located in the United States for delivering emails to users, and we may use the services by Nexmo Inc (located in the United States), Twilio Inc. (located in the United States) and TM4B Ltd. (located in the United Kingdom) for delivering SMS messages to users.
</p>
<p>
  4.6. LocalBitcoins.com forum is a third-party application embedded to our site. It is a service operated by Muut Inc ("<strong>Muut</strong>"), a company located in the United States. Personal data that users may on rare occasions generate by using forum is thus processed by Muut.
</p>
<p>
  4.7. In addition to the specific disclosures of personal data set out in this Section 4, we may also disclose your personal data 1) to our auditors, lawyers, accountants, consultants and other professional advisors insofar as it is reasonably necessary for the purposes of obtaining professional advice or managing legal disputes and risks; 2) where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests and/or the vital interests of a third-party.
</p>
</div>

<h3 class="bold-heading">5. International Transfers of Your Personal Data</h3>
<div>
<p>
  5.1. We store your information primarily within the European Economic Area. However, some features and requirements of the service, involve transferring your information to third-party service providers outside the European Economic Area. We have described all those service providers above in the Section 4. Where such service providers are not established in a country ensuring an adequate level of protection within the meaning of Regulation (EU) 2016/679, such as the United States, the transfers will be covered by the standard data protection clauses adopted by the European Commission or by another appropriate safeguard mechanism such as the Privacy Shield Framework.
</p>
</div>

<h3 class="bold-heading">6. Retaining and Deleting Personal Data</h3>
<div>
<p>
  6.1. This Section 6 sets out our data retention and deletion policies, which are designed to help ensure that we comply with our legal obligations in relation to the user’s right to be forgotten.
</p>
<p>
  6.2. Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.
</p>
<p>
  6.3. Users may request the deletion of their account through our site.
</p>
<p>
  6.4. We will retain and delete your personal data as follows:
</p>
<ul>
  <li>For all users who have deleted their account:
    <ul>
      <li>
        Personally-identifiable analytics data is removed 14 days after account deletion.
      </li>
      <li>
        Notification data is not generally stored by our processors but they may retain activity logs for a short period of time (this time varies depending on the processor in question but is not greater than 13 months).
      </li>
    </ul></li>
  <li>
    For users who have not conducted or initiated any trades or bitcoin transactions to their wallet, we will delete all personal data 14 days after the approval of your account deletion request.
  </li>
  <li>
    For users who have conducted or initiated any trades or sent or received any bitcoin transactions using their wallet and whose account deletion request has been approved by us, our data deletion policy is the following:
    <ul>
      <li>
        Your public profile and advertisements will be hidden 14 days after you delete your account.
      </li>
      <li>
        Your communication data will be deleted 5 years after you delete your account. Trade chat messages are deleted 180 days after the trade is completed. Trade chat messages from disputed trades will be deleted 5 years after you delete your account.
      </li>
      <li>
        Your registration data, account data, ID data, trade data and technical data will be deleted 5 years after you delete your account.
      </li>
      <li>
        Bitcoin transaction data from our internal systems will be removed 5 years after you delete your account, with the exception of publicly available information on the bitcoin blockchain.
      </li>
    </ul>
  </li>
</ul>
<p>
  6.5. In some cases it is not possible for us to specify in advance the periods for which your personal data will be retained. In such cases, we will determine the period of retention based on the period we need to access the data for the provision of services, receiving payment, resolving your customer support issue or other issues or for any other auditing or legal reasons.
</p>
<p>
  6.6. Notwithstanding the other provisions of this Section 6, we may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.
</p>
</div>

<h3 class="bold-heading">7. Your Rights</h3>
<div>
<p>
  7.1. In this Section 7, we have summarised the principal rights that you have under data protection law. Some of the rights are complex, might contain restrictions depending on the legal basis for processing the data and not all of the details have been included in our summaries. Accordingly, you should read the relevant laws and guidance from the regulatory authorities for a full explanation of these rights.
</p>
<p>
  7.2. Your principal rights under data protection law are:
</p>
<p style="padding-left:10px;">
  (a)    the right to access;
</p>
<p style="padding-left:25px;">
  You have the right to confirmation as to whether or not we process your personal data and, where we do, access to the personal data. Providing the rights and freedoms of others are not affected, we will supply to you a copy of your personal data. The first copy will be provided free of charge, but additional copies may be subject to a reasonable fee. You can ask for your personal data by contacting our customer support.
</p>
<p style="padding-left:10px;">
  (b)    the right to rectification;
</p>
<p style="padding-left:25px;">
  You have the right to have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed.
</p>
<p style="padding-left:10px;">
  (c)    the right to erasure;
</p>
<p style="padding-left:25px;">
  You have the right to the erasure of your personal data. We have described our policy for retaining and deleting personal data above in Section 6.
</p>
<p style="padding-left:10px;">
  (d)    the right to object to processing;
</p>
<p style="padding-left:25px;">
  You have the right to object to our processing of your personal data on grounds relating to your particular situation, but only to the extent that the legal basis for the     processing is that the processing is necessary for: the performance of a task carried out in the public interest or in the exercise of any official authority vested in us; or the purposes of the legitimate interests pursued by us or by a third party. If you make such an objection, we will cease to process the personal information unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing is for the establishment, exercise or defence of legal claims.
</p>
<p style="padding-left:10px;">
  (e)    the right to data portability;
</p>
<p style="padding-left:25px;">
  To the extent that the legal basis for our processing of your personal data is consent, and such processing is carried out by automated means, you have the right to receive your personal data from us in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and freedoms of others.
</p>
<p style="padding-left:10px;">
  (f)    the right to complain to a supervisory authority;
</p>
<p style="padding-left:25px;">
   If you consider that our processing of your personal information infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work or the place of the alleged infringement.
</p>
<p style="padding-left:10px;">
  (g)    the right to withdraw consent.
</p>
<p style="padding-left:25px;">
  To the extent that the legal basis for our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal.
</p>
<p>
  7.3. Without prejudice to the aforementioned, if we have reasonable doubts concerning the identity of a user exercising his/her rights referred to in Section 7.2 or if we otherwise due to security reasons deem it necessary, we may request the provision of additional information and otherwise use all reasonable measures necessary to confirm the identity of the user.
</p>
<p>
  7.4. You may exercise any of your rights in relation to your personal data by contacting our customer support. Concerning "Right to erasure" users are also able to request the deletion of their account through our site.
</p>
</div>

<h3 class="bold-heading">8. Cookie Policy</h3>
<div>
<p>
  (a) What are cookies
</p>
<p style="padding-left:21px;">
  As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are saved to your web browser, to improve your experience and to enable certain features, such as authentication. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however this may downgrade or 'break' certain elements of the sites functionality.
</p>
<p style="padding-left:21px;">
  Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
</p>
<p style="padding-left:21px;">
  Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
</p>
<p style="padding-left:21px;">
  For more general information on cookies see the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article on HTTP Cookies</a>.
</p>
<p>
  (b) Cookies that we use
</p>
<p style="padding-left:21px;">
  If you create an account with us then we will use cookies for the management of the signup process, for general administration and for preventing abuse and misuse of our services.
</p>
<p style="padding-left:21px;">
  We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
</p>
<p style="padding-left:21px;">
  When you submit data through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence. In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
</p>
<p style="padding-left:21px;">
  We run an affiliate programme and as a part of it affiliates advertise our site and services. With the affiliate programme we use tracking cookies to track users who visit our site through one of our affiliate partner sites in order to credit them appropriately, and where applicable, allow our affiliate partners to provide you any bonus for making a purchase.
</p>
<p>
  (c) Cookies used by our service providers
</p>
<p style="padding-left:21px;">
  We use Google Analytics to analyse the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website and how we might improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit. Google's privacy policy is available at: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
</p>
<p style="padding-left:21px;">
  In addition, Cloudflare will add a security cookie to any domain or subdomain that is being proxied by our service.
</p>
<p>
  (d) Managing cookies
</p>
<p style="padding-left:21px;">
  You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Disabling cookies will result in disabling all functionality and features of this site. Therefore it is recommended that you do not disable cookies.
</p>
</div>

<h3 class="bold-heading">9. How to Contact Us</h3>
<div>
<p>
  9.1. The data controller responsible for your personal data for is LocalBitcoins Oy, a Finnish limited liability company; address Porkkalankatu 24, 00180 Helsinki, Finland. If you have any questions about this Privacy Policy, your rights and/or our data collection practices, please contact our customer support.
</p>
<div class="well">
  <p>
    <strong>Data Protection officers contact details</strong>
  </p>
  <p>
    LocalBitcoins Oy / Data Protection Officer<br>
    Porkkalankatu 24<br>
    00180 Helsinki<br>
    Finland<br><br>
    dpo@localbitcoins.com
  </p>
</div>
</div>
</div>
    <div align="right">
      <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
      <button type="submit" class="btn btn-success" id="privacy_policy_agree_button">I Agree</button>
    </div>
  </div>
  <div class="modal-footer">
  </div>
</div>
</div>
</div>



  </div>
@endsection
@section('js_content')
  <script type="text/javascript">
    var form = $('form#register_form');
    $('button#submit').click( function(){
      $('span.invalid-feedback').remove();
      $('input.is-invalid').removeClass('is-invalid');
      $.post('/register/check', form.serialize() , function(res){
        if(res.success){
          $('#terms_of_service_modal').modal('show');
        }else{
          for(let k in res.error){
              $('<span class="invalid-feedback" role="alert">'+
                  res.error[k].map(function(a){return '<strong>'+a+'</strong>'}).join('')
              +'</span>').insertAfter($('input#'+k).addClass('is-invalid'));
          }
        }
      } );
    } );
  </script>
@endsection
