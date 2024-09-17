import{ag as ur,ah as ys,ai as Is,a3 as $t,a4 as jt,a5 as at,a8 as Jt,aj as Ts,a7 as hr,ak as ws,ac as Ie,ae as P,al as Qt,am as vs,an as Es,aa as xe,ao as C,ad as dr,a6 as Tt,ap as As,aq as qe,ar as Ps,as as Rs,at as Ae,au as Pe,a9 as Ss,ab as ks,Z as bs,$ as M,af as Ye}from"./index-6bf52aae.js";import{S as et}from"./sweetalert2-a2985e93.js";function Xt(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Sn(n){return n!==void 0&&n.enterprise!==void 0}class Cs{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}function fr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ds=fr,pr=new Qt("auth","Firebase",fr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new dr("@firebase/auth");function Ns(n,...e){ot.logLevel<=xe.WARN&&ot.warn(`Auth (${Ie}): ${n}`,...e)}function tt(n,...e){ot.logLevel<=xe.ERROR&&ot.error(`Auth (${Ie}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,...e){throw Zt(n,...e)}function U(n,...e){return Zt(n,...e)}function mr(n,e,t){const r=Object.assign(Object.assign({},Ds()),{[e]:t});return new Qt("auth","Firebase",r).create(e,{appName:n.name})}function Os(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&L(n,"argument-error"),mr(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return pr.create(n,...e)}function h(n,e,...t){if(!n)throw Zt(e,...t)}function $(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tt(e),new Error(e)}function W(n,e){n||$(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vs(){return kn()==="http:"||kn()==="https:"}function kn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vs()||ws()||"connection"in navigator)?navigator.onLine:!0}function Ms(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.shortDelay=e,this.longDelay=t,W(t>e,"Short delay should be less than long delay!"),this.isMobile=ys()||Is()}get(){return Ls()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e){W(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Be(3e4,6e4);function ee(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function te(n,e,t,r,s={}){return _r(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=qe(Object.assign({key:n.config.apiKey},a)).slice(1),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/json",n.languageCode&&(o["X-Firebase-Locale"]=n.languageCode),gr.fetch()(yr(n,n.config.apiHost,t,c),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},i))})}async function _r(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fs),e);try{const s=new xs(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Je(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[o,l]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Je(n,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw Je(n,"email-already-in-use",a);if(o==="USER_DISABLED")throw Je(n,"user-disabled",a);const u=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw mr(n,u,l);L(n,u)}}catch(s){if(s instanceof Tt)throw s;L(n,"network-request-failed",{message:String(s)})}}async function $e(n,e,t,r,s={}){const i=await te(n,e,t,r,s);return"mfaPendingCredential"in i&&L(n,"multi-factor-auth-required",{_serverResponse:i}),i}function yr(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?en(n.config,s):`${n.config.apiScheme}://${s}`}class xs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(U(this.auth,"network-request-failed")),Us.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Je(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=U(n,e,r);return s.customData._tokenResponse=t,s}async function qs(n,e){return te(n,"GET","/v2/recaptchaConfig",ee(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n,e){return te(n,"POST","/v1/accounts:delete",e)}async function $s(n,e){return te(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function js(n,e=!1){const t=P(n),r=await t.getIdToken(e),s=tn(r);h(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Re(Lt(s.auth_time)),issuedAtTime:Re(Lt(s.iat)),expirationTime:Re(Lt(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lt(n){return Number(n)*1e3}function tn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return tt("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ps(t);return s?JSON.parse(s):(tt("Failed to decode base64 JWT payload"),null)}catch(s){return tt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zs(n){const e=tn(n);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tt&&Ws(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ws({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Re(this.lastLoginAt),this.creationTime=Re(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(n){var e;const t=n.auth,r=await n.getIdToken(),s=await De(n,$s(t,{idToken:r}));h(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ys(i.providerUserInfo):[],c=Gs(n.providerData,a),o=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),u=o?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ir(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function Ks(n){const e=P(n);await ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gs(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ys(n){return n.map(e=>{var{providerId:t}=e,r=Xt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n,e){const t=await _r(n,{},async()=>{const r=qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=yr(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gr.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return h(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Js(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ne;return r&&(h(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(h(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(h(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ne,this.toJSON())}_performRefresh(){return $("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,e){h(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class re{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Xt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ir(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await De(this,this.stsTokenManager.getToken(this.auth,e));return h(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return js(this,e)}reload(){return Ks(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ct(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await De(this,Bs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,o,l,u;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,B=(a=t.photoURL)!==null&&a!==void 0?a:void 0,Ge=(c=t.tenantId)!==null&&c!==void 0?c:void 0,ue=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,vn=(l=t.createdAt)!==null&&l!==void 0?l:void 0,En=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Nt,emailVerified:An,isAnonymous:Pn,providerData:Ot,stsTokenManager:Rn}=t;h(Nt&&Rn,e,"internal-error");const gs=Ne.fromJSON(this.name,Rn);h(typeof Nt=="string",e,"internal-error"),G(f,e.name),G(g,e.name),h(typeof An=="boolean",e,"internal-error"),h(typeof Pn=="boolean",e,"internal-error"),G(R,e.name),G(B,e.name),G(Ge,e.name),G(ue,e.name),G(vn,e.name),G(En,e.name);const Vt=new re({uid:Nt,auth:e,email:g,emailVerified:An,displayName:f,isAnonymous:Pn,photoURL:B,phoneNumber:R,tenantId:Ge,stsTokenManager:gs,createdAt:vn,lastLoginAt:En});return Ot&&Array.isArray(Ot)&&(Vt.providerData=Ot.map(_s=>Object.assign({},_s))),ue&&(Vt._redirectEventId=ue),Vt}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ne;s.updateFromServerResponse(t);const i=new re({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ct(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Map;function j(n){W(n instanceof Function,"Expected a class definition");let e=bn.get(n);return e?(W(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,bn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Tr.type="NONE";const Cn=Tr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,e,t){return`firebase:${n}:${e}:${t}`}class fe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nt(this.userKey,s.apiKey,i),this.fullPersistenceKey=nt("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fe(j(Cn),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||j(Cn);const a=nt(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const u=await l._get(a);if(u){const f=re._fromJSON(e,u);l!==i&&(c=f),i=l;break}}catch{}const o=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new fe(i,e,r):(i=o[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(a)}catch{}})),new fe(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Er(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pr(e))return"Blackberry";if(Rr(e))return"Webos";if(nn(e))return"Safari";if((e.includes("chrome/")||vr(e))&&!e.includes("edge/"))return"Chrome";if(Ar(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wr(n=C()){return/firefox\//i.test(n)}function nn(n=C()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vr(n=C()){return/crios\//i.test(n)}function Er(n=C()){return/iemobile/i.test(n)}function Ar(n=C()){return/android/i.test(n)}function Pr(n=C()){return/blackberry/i.test(n)}function Rr(n=C()){return/webos/i.test(n)}function wt(n=C()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qs(n=C()){var e;return wt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xs(){return As()&&document.documentMode===10}function Sr(n=C()){return wt(n)||Ar(n)||Rr(n)||Pr(n)||/windows phone/i.test(n)||Er(n)}function Zs(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n,e=[]){let t;switch(n){case"Browser":t=Dn(C());break;case"Worker":t=`${Dn(C())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ie}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const o=e(i);a(o)}catch(o){c(o)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(n,e={}){return te(n,"GET","/v2/passwordPolicy",ee(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=6;class ri{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ni,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(t=o.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(s=o.containsLowercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(i=o.containsUppercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(c=o.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),o}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nn(this),this.idTokenSubscription=new Nn(this),this.beforeStateQueue=new ei(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=j(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(s=o.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ct(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ms()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?P(e):null;return t&&h(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(j(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ti(this),t=new ri(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&j(e)||this._popupRedirectResolver;h(t,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[j(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const o=e.addObserver(t,r,s);return()=>{a=!0,o()}}else{const o=e.addObserver(t);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ns(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function K(n){return P(n)}class Nn{constructor(e){this.auth=e,this.observer=null,this.addObserver=vs(t=>this.observer=t)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function br(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=U("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ii().appendChild(r)})}function ai(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const oi="https://www.google.com/recaptcha/enterprise.js?render=",ci="recaptcha-enterprise",li="NO_RECAPTCHA";class ui{constructor(e){this.type=ci,this.auth=K(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{qs(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Cs(o);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,a(l.siteKey)}}).catch(o=>{c(o)})})}function s(i,a,c){const o=window.grecaptcha;Sn(o)?o.enterprise.ready(()=>{o.enterprise.execute(i,{action:e}).then(l=>{a(l)}).catch(()=>{a(li)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Sn(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}br(oi+c).then(()=>{s(c,i,a)}).catch(o=>{a(o)})}}).catch(c=>{a(c)})})}}async function me(n,e,t,r=!1){const s=new ui(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,e){const t=Jt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Es(i,e??{}))return s;L(s,"already-initialized")}return t.initialize({options:e})}function di(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(j);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fi(n,e,t){const r=K(n);h(r._canInitEmulator,r,"emulator-config-failed"),h(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Cr(e),{host:a,port:c}=pi(e),o=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mi()}function Cr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pi(n){const e=Cr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:On(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:On(a)}}}function On(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mi(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $("not implemented")}_getIdTokenResponse(e){return $("not implemented")}_linkToIdToken(e,t){return $("not implemented")}_getReauthenticationResolver(e){return $("not implemented")}}async function gi(n,e){return te(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(n,e){return $e(n,"POST","/v1/accounts:signInWithPassword",ee(n,e))}async function _i(n,e){return te(n,"POST","/v1/accounts:sendOobCode",ee(n,e))}async function Ft(n,e){return _i(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n,e){return $e(n,"POST","/v1/accounts:signInWithEmailLink",ee(n,e))}async function Ii(n,e){return $e(n,"POST","/v1/accounts:signInWithEmailLink",ee(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends rn{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Oe(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Oe(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await me(e,r,"signInWithPassword");return Mt(e,s)}else return Mt(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await me(e,r,"signInWithPassword");return Mt(e,i)}else return Promise.reject(s)});case"emailLink":return yi(e,{email:this._email,oobCode:this._password});default:L(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return gi(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ii(e,{idToken:t,email:this._email,oobCode:this._password});default:L(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(n,e){return $e(n,"POST","/v1/accounts:signInWithIdp",ee(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="http://localhost";class ie extends rn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ie(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):L("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Xt(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ie(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return pe(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pe(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pe(e,t)}buildRequest(){const e={requestUri:Ti,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qe(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vi(n){const e=Ae(Pe(n)).link,t=e?Ae(Pe(e)).deep_link_id:null,r=Ae(Pe(n)).deep_link_id;return(r?Ae(Pe(r)).link:null)||r||t||e||n}class sn{constructor(e){var t,r,s,i,a,c;const o=Ae(Pe(e)),l=(t=o.apiKey)!==null&&t!==void 0?t:null,u=(r=o.oobCode)!==null&&r!==void 0?r:null,f=wi((s=o.mode)!==null&&s!==void 0?s:null);h(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=o.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=o.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=vi(e);try{return new sn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.providerId=Te.PROVIDER_ID}static credential(e,t){return Oe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=sn.parseLink(t);return h(r,"argument-error"),Oe._fromEmailAndCode(e,r.code,r.tenantId)}}Te.PROVIDER_ID="password";Te.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Te.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends an{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends je{constructor(){super("facebook.com")}static credential(e){return ie._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J.credential(e.oauthAccessToken)}catch{return null}}}J.FACEBOOK_SIGN_IN_METHOD="facebook.com";J.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends je{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ie._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Q.credential(t,r)}catch{return null}}}Q.GOOGLE_SIGN_IN_METHOD="google.com";Q.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends je{constructor(){super("github.com")}static credential(e){return ie._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends je{constructor(){super("twitter.com")}static credential(e,t){return ie._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Z.credential(t,r)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(n,e){return $e(n,"POST","/v1/accounts:signUp",ee(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await re._fromIdTokenResponse(e,r,s),a=Vn(r);return new ae({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Vn(r);return new ae({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Vn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Tt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new lt(e,t,r,s)}}function Dr(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lt._fromErrorAndOperation(n,i,e,r):i})}async function Ei(n,e,t=!1){const r=await De(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ae._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await De(n,Dr(r,s,e,n),t);h(i.idToken,r,"internal-error");const a=tn(i.idToken);h(a,r,"internal-error");const{sub:c}=a;return h(n.uid===c,r,"user-mismatch"),ae._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&L(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(n,e,t=!1){const r="signIn",s=await Dr(n,r,e),i=await ae._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Pi(n,e){return Nr(K(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e,t){var r;h(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),h(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(h(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(h(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(n){const e=K(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lc(n,e,t){var r;const s=K(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await me(s,i,"getOobCode",!0);t&&xt(s,a,t),await Ft(s,a)}else t&&xt(s,i,t),await Ft(s,i).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const c=await me(s,i,"getOobCode",!0);t&&xt(s,c,t),await Ft(s,c)}else return Promise.reject(a)})}async function uc(n,e,t){var r;const s=K(n),i={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await me(s,i,"signUpPassword");a=Ut(s,l)}else a=Ut(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await me(s,i,"signUpPassword");return Ut(s,u)}throw l});const c=await a.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Or(n),l}),o=await ae._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(o.user),o}function hc(n,e,t){return Pi(P(n),Te.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Or(n),r})}function Ri(n,e,t,r){return P(n).onIdTokenChanged(e,t,r)}function Si(n,e,t){return P(n).beforeAuthStateChanged(e,t)}function Ln(n,e,t,r){return P(n).onAuthStateChanged(e,t,r)}function dc(n){return P(n).signOut()}const ut="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(){const n=C();return nn(n)||wt(n)}const bi=1e3,Ci=10;class Lr extends Vr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ki()&&Zs(),this.fallbackToPolling=Sr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Xs()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ci):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},bi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lr.type="LOCAL";const Di=Lr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Vr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mr.type="SESSION";const Fr=Mr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new vt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async l=>l(t.origin,i)),o=await Ni(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,o)=>{const l=on("",20);s.port1.start();const u=setTimeout(()=>{o(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return window}function Vi(n){x().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){return typeof x().WorkerGlobalScope<"u"&&typeof x().importScripts=="function"}async function Li(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mi(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fi(){return Ur()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="firebaseLocalStorageDb",Ui=1,ht="firebaseLocalStorage",qr="fbase_key";class ze{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Et(n,e){return n.transaction([ht],e?"readwrite":"readonly").objectStore(ht)}function xi(){const n=indexedDB.deleteDatabase(xr);return new ze(n).toPromise()}function Wt(){const n=indexedDB.open(xr,Ui);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ht,{keyPath:qr})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ht)?e(r):(r.close(),await xi(),e(await Wt()))})})}async function Mn(n,e,t){const r=Et(n,!0).put({[qr]:e,value:t});return new ze(r).toPromise()}async function qi(n,e){const t=Et(n,!1).get(e),r=await new ze(t).toPromise();return r===void 0?null:r.value}function Fn(n,e){const t=Et(n,!0).delete(e);return new ze(t).toPromise()}const Bi=800,$i=3;class Br{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$i)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ur()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vt._getInstance(Fi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Li(),!this.activeServiceWorker)return;this.sender=new Oi(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await Mn(e,ut,"1"),await Fn(e,ut),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qi(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Et(s,!1).getAll();return new ze(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Br.type="LOCAL";const ji=Br;new Be(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n,e){return e?j(e):(h(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends rn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zi(n){return Nr(n.auth,new cn(n),n.bypassAuthState)}function Wi(n){const{auth:e,user:t}=n;return h(t,e,"internal-error"),Ai(t,new cn(n),n.bypassAuthState)}async function Hi(n){const{auth:e,user:t}=n;return h(t,e,"internal-error"),Ei(t,new cn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zi;case"linkViaPopup":case"linkViaRedirect":return Hi;case"reauthViaPopup":case"reauthViaRedirect":return Wi;default:L(this.auth,"internal-error")}}resolve(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Be(2e3,1e4);async function fc(n,e,t){const r=K(n);Os(n,e,an);const s=$r(r,t);return new ne(r,"signInViaPopup",e,s).executeNotNull()}class ne extends jr{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ne.currentPopupAction&&ne.currentPopupAction.cancel(),ne.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){W(this.filter.length===1,"Popup operations only handle one event");const e=on();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(U(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(U(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ne.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(U(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ki.get())};e()}}ne.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="pendingRedirect",rt=new Map;class Yi extends jr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rt.get(this.auth._key());if(!e){try{const r=await Ji(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}rt.set(this.auth._key(),e)}return this.bypassAuthState||rt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ji(n,e){const t=Zi(e),r=Xi(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Qi(n,e){rt.set(n._key(),e)}function Xi(n){return j(n._redirectPersistence)}function Zi(n){return nt(Gi,n.config.apiKey,n.name)}async function ea(n,e,t=!1){const r=K(n),s=$r(r,e),a=await new Yi(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=10*60*1e3;class na{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ra(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zr(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(U(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ta&&this.cachedEventUids.clear(),this.cachedEventUids.has(Un(e))}saveEventToCache(e){this.cachedEventUids.add(Un(e)),this.lastProcessedEventTime=Date.now()}}function Un(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ra(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(n,e={}){return te(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aa=/^https?/;async function oa(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sa(n);for(const t of e)try{if(ca(t))return}catch{}L(n,"unauthorized-domain")}function ca(n){const e=zt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!aa.test(t))return!1;if(ia.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Be(3e4,6e4);function xn(){const n=x().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ua(n){return new Promise((e,t)=>{var r,s,i;function a(){xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xn(),t(U(n,"network-request-failed"))},timeout:la.get()})}if(!((s=(r=x().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=x().gapi)===null||i===void 0)&&i.load)a();else{const c=ai("iframefcb");return x()[c]=()=>{gapi.load?a():t(U(n,"network-request-failed"))},br(`https://apis.google.com/js/api.js?onload=${c}`).catch(o=>t(o))}}).catch(e=>{throw st=null,e})}let st=null;function ha(n){return st=st||ua(n),st}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Be(5e3,15e3),fa="__/auth/iframe",pa="emulator/auth/iframe",ma={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ga=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _a(n){const e=n.config;h(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?en(e,pa):`https://${n.config.authDomain}/${fa}`,r={apiKey:e.apiKey,appName:n.name,v:Ie},s=ga.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${qe(r).slice(1)}`}async function ya(n){const e=await ha(n),t=x().gapi;return h(t,n,"internal-error"),e.open({where:document.body,url:_a(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ma,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=U(n,"network-request-failed"),c=x().setTimeout(()=>{i(a)},da.get());function o(){x().clearTimeout(c),s(r)}r.ping(o).then(o,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ta=500,wa=600,va="_blank",Ea="http://localhost";class qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Aa(n,e,t,r=Ta,s=wa){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const o=Object.assign(Object.assign({},Ia),{width:r.toString(),height:s.toString(),top:i,left:a}),l=C().toLowerCase();t&&(c=vr(l)?va:t),wr(l)&&(e=e||Ea,o.scrollbars="yes");const u=Object.entries(o).reduce((g,[R,B])=>`${g}${R}=${B},`,"");if(Qs(l)&&c!=="_self")return Pa(e||"",c),new qn(null);const f=window.open(e||"",c,u);h(f,n,"popup-blocked");try{f.focus()}catch{}return new qn(f)}function Pa(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="__/auth/handler",Sa="emulator/auth/handler",ka=encodeURIComponent("fac");async function Bn(n,e,t,r,s,i){h(n.config.authDomain,n,"auth-domain-config-required"),h(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ie,eventId:s};if(e instanceof an){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Rs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))a[u]=f}if(e instanceof je){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const o=await n._getAppCheckToken(),l=o?`#${ka}=${encodeURIComponent(o)}`:"";return`${ba(n)}?${qe(c).slice(1)}${l}`}function ba({config:n}){return n.emulator?en(n,Sa):`https://${n.authDomain}/${Ra}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="webStorageSupport";class Ca{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fr,this._completeRedirectFn=ea,this._overrideRedirectResult=Qi}async _openPopup(e,t,r,s){var i;W((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Bn(e,t,r,zt(),s);return Aa(e,a,on())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Bn(e,t,r,zt(),s);return Vi(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(W(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ya(e),r=new na(e);return t.register("authEvent",s=>(h(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qt,{type:qt},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qt];a!==void 0&&t(!!a),L(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sr()||nn()||wt()}}const Da=Ca;var $n="@firebase/auth",jn="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Va(n){$t(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;h(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kr(n)},l=new si(r,s,i,o);return di(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$t(new jt("auth-internal",e=>{const t=K(e.getProvider("auth").getImmediate());return(r=>new Na(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at($n,jn,Oa(n)),at($n,jn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=5*60,Ma=ur("authIdTokenMaxAge")||La;let zn=null;const Fa=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ma)return;const s=t==null?void 0:t.token;zn!==s&&(zn=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ua(n=hr()){const e=Jt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hi(n,{popupRedirectResolver:Da,persistence:[ji,Di,Fr]}),r=ur("authTokenSyncURL");if(r){const i=Fa(r);Si(t,i,()=>i(t.currentUser)),Ri(t,a=>i(a))}const s=Ts("auth");return s&&fi(t,`http://${s}`),t}Va("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new dr("@firebase/firestore");function dt(n,...e){if(ge.logLevel<=xe.DEBUG){const t=e.map(un);ge.debug(`Firestore (${we}): ${n}`,...t)}}function ln(n,...e){if(ge.logLevel<=xe.ERROR){const t=e.map(un);ge.error(`Firestore (${we}): ${n}`,...t)}}function Wr(n,...e){if(ge.logLevel<=xe.WARN){const t=e.map(un);ge.warn(`Firestore (${we}): ${n}`,...t)}}function un(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(n="Unexpected state"){const e=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw ln(e),new Error(e)}function O(n,e){n||_()}function We(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="ok",xa="cancelled",Se="unknown",m="invalid-argument",qa="deadline-exceeded",Ba="not-found",$a="permission-denied",Ht="unauthenticated",ja="resource-exhausted",_e="failed-precondition",za="aborted",Wa="out-of-range",Hr="unimplemented",Ha="internal",Ka="unavailable";class d extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ga{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(k.UNAUTHENTICATED))}shutdown(){}}class Ya{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ja{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(O(typeof e.accessToken=="string"),new Kr(e.accessToken,new k(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Qa{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=k.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Xa{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Qa(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(k.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Za{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eo{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(O(typeof e.token=="string"),new Za(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,r,s,i,a,c,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=o,this.useFetchStreams=l}}class Ve{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ve("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ve&&e.projectId===this.projectId&&e.database===this.database}}class Le{constructor(e,t,r){t===void 0?t=0:t>e.length&&_(),r===void 0?r=e.length-t:r>e.length-t&&_(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class w extends Le{construct(e,t,r){return new w(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new d(m,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new w(t)}static emptyPath(){return new w([])}}const no=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class D extends Le{construct(e,t,r){return new D(e,t,r)}static isValidIdentifier(e){return no.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),D.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new D(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new d(m,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new d(m,"Path has trailing escape character: "+e);const o=e[s+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new d(m,"Path has invalid escape sequence: "+e);r+=o,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new d(m,"Unterminated ` in path: "+e);return new D(t)}static emptyPath(){return new D([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(w.fromString(e))}static fromName(e){return new S(w.fromString(e).popFirst(5))}static empty(){return new S(w.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&w.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return w.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new w(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n,e,t){if(!t)throw new d(m,`Function ${n}() cannot be called with an empty ${e}.`)}function Hn(n){if(!S.isDocumentKey(n))throw new d(m,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kn(n){if(S.isDocumentKey(n))throw new d(m,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_()}function ve(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new d(m,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hn(n);throw new d(m,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=null;function ro(){return Qe===null?Qe=function(){return 268435456+Math.round(2147483648*Math.random())}():Qe++,"0x"+Qe.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){return n==null}function ft(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn,p;function Yn(n){if(n===void 0)return ln("RPC_ERROR","HTTP error has no status"),Se;switch(n){case 200:return Wn;case 400:return _e;case 401:return Ht;case 403:return $a;case 404:return Ba;case 409:return za;case 416:return Wa;case 429:return ja;case 499:return xa;case 500:return Se;case 501:return Hr;case 503:return Ka;case 504:return qa;default:return n>=200&&n<300?Wn:n>=400&&n<500?_e:n>=500&&n<600?Ha:Se}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(p=Gn||(Gn={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";class ao extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get P(){return!1}R(t,r,s,i,a){const c=ro(),o=this.I(t,r);dt("RestConnection",`Sending RPC '${t}' ${c}:`,o,s);const l={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(l,i,a),this.p(t,o,l,s).then(u=>(dt("RestConnection",`Received RPC '${t}' ${c}: `,u),u),u=>{throw Wr("RestConnection",`RPC '${t}' ${c} failed with error: `,u,"url: ",o,"request:",s),u})}g(t,r,s,i,a,c){return this.R(t,r,s,i,a)}V(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}I(t,r){const s=io[t];return`${this.m}/v1/${r}:${s}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,s){var i;const a=JSON.stringify(s);let c;try{c=await this.F(t,{method:"POST",headers:r,body:a})}catch(o){const l=o;throw new d(Yn(l.status),"Request failed with error: "+l.statusText)}if(!c.ok){let o=await c.json();Array.isArray(o)&&(o=o[0]);const l=(i=o==null?void 0:o.error)===null||i===void 0?void 0:i.message;throw new d(Yn(c.status),`Request failed with error: ${l??c.statusText}`)}return c.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=oo(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function T(n,e){return n<e?-1:n>e?1:0}function Jr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function He(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lo("Invalid base64 string: "+i):i}}(e);return new H(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new H(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return T(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}H.EMPTY_BYTE_STRING=new H("");const uo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(n){if(O(!!n),typeof n=="string"){let e=0;const t=uo.exec(n);if(O(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:y(n.seconds),nanos:y(n.nanos)}}function y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Me(n){return typeof n=="string"?H.fromBase64String(n):H.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new d(m,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new d(m,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new d(m,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new d(m,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new V(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?T(this.nanoseconds,e.nanoseconds):T(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xr(n){const e=n.mapValue.fields.__previous_value__;return Qr(e)?Xr(e):e}function Fe(n){const e=oe(n.mapValue.fields.__local_write_time__.timestampValue);return new V(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={fields:{__type__:{stringValue:"__max__"}}};function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qr(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:_()}function pt(n,e){if(n===e)return!0;const t=ce(n);if(t!==ce(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fe(n).isEqual(Fe(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=oe(s.timestampValue),c=oe(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Me(s.bytesValue).isEqual(Me(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return y(s.geoPointValue.latitude)===y(i.geoPointValue.latitude)&&y(s.geoPointValue.longitude)===y(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return y(s.integerValue)===y(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=y(s.doubleValue),c=y(i.doubleValue);return a===c?ft(a)===ft(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Jr(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Jn(a)!==Jn(c))return!1;for(const o in a)if(a.hasOwnProperty(o)&&(c[o]===void 0||!pt(a[o],c[o])))return!1;return!0}(n,e);default:return _()}}function Ue(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function mt(n,e){if(n===e)return 0;const t=ce(n),r=ce(e);if(t!==r)return T(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return T(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=y(i.integerValue||i.doubleValue),o=y(a.integerValue||a.doubleValue);return c<o?-1:c>o?1:c===o?0:isNaN(c)?isNaN(o)?0:-1:1}(n,e);case 3:return Qn(n.timestampValue,e.timestampValue);case 4:return Qn(Fe(n),Fe(e));case 5:return T(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Me(i),o=Me(a);return c.compareTo(o)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),o=a.split("/");for(let l=0;l<c.length&&l<o.length;l++){const u=T(c[l],o[l]);if(u!==0)return u}return T(c.length,o.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=T(y(i.latitude),y(a.latitude));return c!==0?c:T(y(i.longitude),y(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],o=a.values||[];for(let l=0;l<c.length&&l<o.length;++l){const u=mt(c[l],o[l]);if(u)return u}return T(c.length,o.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===Xe&&a===Xe)return 0;if(i===Xe)return 1;if(a===Xe)return-1;const c=i.fields||{},o=Object.keys(c),l=a.fields||{},u=Object.keys(l);o.sort(),u.sort();for(let f=0;f<o.length&&f<u.length;++f){const g=T(o[f],u[f]);if(g!==0)return g;const R=mt(c[o[f]],l[u[f]]);if(R!==0)return R}return T(o.length,u.length)}(n.mapValue,e.mapValue);default:throw _()}}function Qn(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return T(n,e);const t=oe(n),r=oe(e),s=T(t.seconds,r.seconds);return s!==0?s:T(t.nanos,r.nanos)}function Zr(n){return!!n&&"arrayValue"in n}function Xn(n){return!!n&&"nullValue"in n}function Zn(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bt(n){return!!n&&"mapValue"in n}function ke(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return He(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ke(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ke(n.arrayValue.values[t]);return e}return Object.assign({},n)}class er{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{}class q extends es{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ho(e,t,r):t==="array-contains"?new mo(e,r):t==="in"?new go(e,r):t==="not-in"?new _o(e,r):t==="array-contains-any"?new yo(e,r):new q(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new fo(e,r):new po(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(mt(t,this.value)):t!==null&&ce(this.value)===ce(t)&&this.matchesComparison(mt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class At extends es{constructor(e,t){super(),this.filters=e,this.op=t,this.S=null}static create(e,t){return new At(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(t=>t.isInequality());return e!==null?e.field:null}N(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class ho extends q{constructor(e,t,r){super(e,t,r),this.key=S.fromName(r.referenceValue)}matches(e){const t=S.comparator(e.key,this.key);return this.matchesComparison(t)}}class fo extends q{constructor(e,t){super(e,"in",t),this.keys=ts("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class po extends q{constructor(e,t){super(e,"not-in",t),this.keys=ts("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ts(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>S.fromName(r.referenceValue))}class mo extends q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zr(t)&&Ue(t.arrayValue,this.value)}}class go extends q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ue(this.value.arrayValue,t)}}class _o extends q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ue(this.value.arrayValue,t)}}class yo extends q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ue(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.timestamp=e}static fromTimestamp(e){return new E(e)}static min(){return new E(new V(0,0))}static max(){return new E(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.comparator=e,this.root=t||A.EMPTY}insert(e,t){return new gt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,A.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,A.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ze(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ze(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ze(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ze(this.root,e,this.comparator,!0)}}class Ze{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class A{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??A.RED,this.left=s??A.EMPTY,this.right=i??A.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new A(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return A.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return A.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,A.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,A.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}A.EMPTY=null,A.RED=!0,A.BLACK=!1;A.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,r,s,i){return this}insert(e,t,r){return new A(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tr(this.data.getIterator())}getIteratorFrom(e){return new tr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class tr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.fields=e,e.sort(D.comparator)}static empty(){return new le([])}unionWith(e){let t=new _t(D.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.value=e}static empty(){return new N({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ke(t)}setAll(e){let t=D.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const o=this.getFieldsMap(t);this.applyChanges(o,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ke(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Bt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Bt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){He(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new N(ke(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new F(e,0,E.min(),E.min(),E.min(),N.empty(),0)}static newFoundDocument(e,t,r,s){return new F(e,1,t,E.min(),r,s,0)}static newNoDocument(e,t){return new F(e,2,t,E.min(),E.min(),N.empty(),0)}static newUnknownDocument(e,t){return new F(e,3,t,E.min(),E.min(),N.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(E.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=N.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=N.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=E.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof F&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new F(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.O=null}}function nr(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Io(n,e,t,r,s,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=o,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function wo(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function vo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Eo(n){const e=We(n);if(e.q===null){e.q=[];const t=vo(e),r=wo(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new it(t)),e.q.push(new it(D.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new it(D.keyField(),i))}}}return e.q}function Ao(n){const e=We(n);return e.B||(e.B=Po(e,Eo(n))),e.B}function Po(n,e){if(n.limitType==="F")return nr(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new it(s.field,i)});const t=n.endAt?new er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new er(n.startAt.position,n.startAt.inclusive):null;return nr(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!ft(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ft(s)?"-0":s}}(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this._=void 0}}class So extends Pt{}class ko extends Pt{constructor(e){super(),this.elements=e}}class bo extends Pt{constructor(e){super(),this.elements=e}}class Co extends Pt{constructor(e,t){super(),this.serializer=e,this.L=t}}class se{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new se}static exists(e){return new se(void 0,e)}static updateTime(e){return new se(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Rt{}class ns extends Rt{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dn extends Rt{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Do extends Rt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class No extends Rt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vo=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lo=(()=>({and:"AND",or:"OR"}))();class Mo{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kt(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fo(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Uo(n,e){return Kt(n,e.toTimestamp())}function be(n){return O(!!n),E.fromTimestamp(function(t){const r=oe(t);return new V(r.seconds,r.nanos)}(n))}function fn(n,e){return function(r){return new w(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function yt(n,e){return fn(n.databaseId,e.path)}function Gt(n,e){const t=function(s){const i=w.fromString(s);return O(is(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new d(m,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new d(m,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new S(function(s){return O(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(t))}function rr(n,e){return fn(n.databaseId,e)}function rs(n){return new w(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sr(n,e,t){return{name:yt(n,e),fields:t.value.mapValue.fields}}function xo(n,e){return"found"in e?function(r,s){O(!!s.found),s.found.name,s.found.updateTime;const i=Gt(r,s.found.name),a=be(s.found.updateTime),c=s.found.createTime?be(s.found.createTime):E.min(),o=new N({mapValue:{fields:s.found.fields}});return F.newFoundDocument(i,a,c,o)}(n,e):"missing"in e?function(r,s){O(!!s.missing),O(!!s.readTime);const i=Gt(r,s.missing),a=be(s.readTime);return F.newNoDocument(i,a)}(n,e):_()}function qo(n,e){let t;if(e instanceof ns)t={update:sr(n,e.key,e.value)};else if(e instanceof Do)t={delete:yt(n,e.key)};else if(e instanceof dn)t={update:sr(n,e.key,e.data),updateMask:Wo(e.fieldMask)};else{if(!(e instanceof No))return _();t={verify:yt(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof So)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ko)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof bo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Co)return{fieldPath:a.field.canonicalString(),increment:c.L};throw _()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Uo(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(n,e.precondition)),t}function Bo(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=rr(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=rr(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(o){if(o.length!==0)return ss(At.create(o,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:de(f.field),direction:$o(f.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=function(o,l){return o.useProto3Json||so(l)?l:{value:l}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(o){return{before:o.inclusive,values:o.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),t}function $o(n){return Oo[n]}function jo(n){return Vo[n]}function zo(n){return Lo[n]}function de(n){return{fieldPath:n.canonicalString()}}function ss(n){return n instanceof q?function(t){if(t.op==="=="){if(Zn(t.value))return{unaryFilter:{field:de(t.field),op:"IS_NAN"}};if(Xn(t.value))return{unaryFilter:{field:de(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zn(t.value))return{unaryFilter:{field:de(t.field),op:"IS_NOT_NAN"}};if(Xn(t.value))return{unaryFilter:{field:de(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(t.field),op:jo(t.op),value:t.value}}}(n):n instanceof At?function(t){const r=t.getFilters().map(s=>ss(s));return r.length===1?r[0]:{compositeFilter:{op:zo(t.op),filters:r}}}(n):_()}function Wo(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function is(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n){return new Mo(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.X=!1}tt(){if(this.X)throw new d(_e,"The client has already been terminated.")}R(e,t,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.R(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ht&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new d(Se,s.toString())})}g(e,t,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.g(e,t,r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ht&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new d(Se,i.toString())})}terminate(){this.X=!0}}async function mn(n,e){const t=We(n),r=rs(t.serializer)+"/documents",s={writes:e.map(i=>qo(t.serializer,i))};await t.R("Commit",r,s)}async function Ko(n,e){const t=We(n),r=rs(t.serializer)+"/documents",s={documents:e.map(o=>yt(t.serializer,o))},i=await t.g("BatchGetDocuments",r,s,e.length),a=new Map;i.forEach(o=>{const l=xo(t.serializer,o);a.set(l.key.toString(),l)});const c=[];return e.forEach(o=>{const l=a.get(o.toString());O(!!l),c.push(l)}),c}async function Go(n,e){const t=We(n),r=Bo(t.serializer,Ao(e));return(await t.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,c,o){const l=Gt(a,c.name),u=be(c.updateTime),f=c.createTime?be(c.createTime):E.min(),g=new N({mapValue:{fields:c.fields}}),R=F.newFoundDocument(l,u,f,g);return o&&R.setHasCommittedMutations(),o?R.setHasCommittedMutations():R}(t.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Map;function Ke(n){if(n._terminated)throw new d(_e,"The client has already been terminated.");if(!Ce.has(n)){dt("ComponentProvider","Initializing Datastore");const e=function(i){return new ao(i,fetch.bind(null))}(function(i,a,c,o){return new to(i,a,c,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Yr(o.experimentalLongPollingOptions),o.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=pn(n._databaseId),r=function(i,a,c,o){return new Ho(i,a,c,o)}(n._authCredentials,n._appCheckCredentials,e,t);Ce.set(n,r)}return Ce.get(n)}class ir{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new d(m,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new d(m,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,a,c,o){if(a===!0&&o===!0)throw new d(m,`${i} and ${c} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yr((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new d(m,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new d(m,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new d(m,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class St{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ir({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new d(_e,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new d(_e,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ir(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ga;switch(r.type){case"firstParty":return new Xa(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new d(m,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ce.get(t);r&&(dt("ComponentProvider","Removing Datastore"),Ce.delete(t),r.terminate())}(this),Promise.resolve()}}function Yo(n,e){const t=typeof n=="object"?n:hr(),r=typeof n=="string"?n:e||"(default)",s=Jt(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Ss("firestore");i&&Jo(s,...i)}return s}function Jo(n,e,t,r={}){var s;const i=(n=ve(n,St))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,o;if(typeof r.mockUserToken=="string")c=r.mockUserToken,o=k.MOCK_USER;else{c=ks(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new d(m,"mockUserToken must contain 'sub' or 'user_id' field!");o=new k(l)}n._authCredentials=new Ya(new Kr(c,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kt(this.firestore,e,this._query)}}class b{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new z(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new b(this.firestore,e,this._key)}}class z extends kt{constructor(e,t,r){super(e,t,function(i){return new To(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new b(this.firestore,null,new S(e))}withConverter(e){return new z(this.firestore,e,this._path)}}function ar(n,e,...t){if(n=P(n),Gr("collection","path",e),n instanceof St){const r=w.fromString(e,...t);return Kn(r),new z(n,null,r)}{if(!(n instanceof b||n instanceof z))throw new d(m,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(w.fromString(e,...t));return Kn(r),new z(n.firestore,null,r)}}function v(n,e,...t){if(n=P(n),arguments.length===1&&(e=co.C()),Gr("doc","path",e),n instanceof St){const r=w.fromString(e,...t);return Hn(r),new b(n,null,new S(r))}{if(!(n instanceof b||n instanceof z))throw new d(m,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(w.fromString(e,...t));return Hn(r),new b(n.firestore,n instanceof z?n.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ye(H.fromBase64String(e))}catch(t){throw new d(m,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ye(H.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new d(m,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new D(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new d(m,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new d(m,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return T(this._lat,e._lat)||T(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=/^__.*__$/;class Xo{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ns(e,this.data,t,this.fieldTransforms)}}class as{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new dn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function os(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class yn{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.rt(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}it(e){return new yn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.it({path:r,ot:!1});return s.ut(e),s}_t(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.it({path:r,ot:!1});return s.rt(),s}lt(e){return this.it({path:void 0,ot:!0})}ct(e){return It(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(os(this.nt)&&Qo.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class Zo{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||pn(e)}ft(e,t,r,s=!1){return new yn({nt:e,methodName:t,dt:r,path:D.emptyPath(),ot:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function In(n){const e=n._freezeSettings(),t=pn(n._databaseId);return new Zo(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cs(n,e,t,r,s,i={}){const a=n.ft(i.merge||i.mergeFields?2:0,e,t,s);Tn("Data must be an object, but it was:",a,r);const c=ls(r,a);let o,l;if(i.merge)o=new le(a.fieldMask),l=a.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const g=Yt(e,f,t);if(!a.contains(g))throw new d(m,`Field '${g}' is specified in your field mask but missing from your input data.`);hs(u,g)||u.push(g)}o=new le(u),l=a.fieldTransforms.filter(f=>o.covers(f.field))}else o=null,l=a.fieldTransforms;return new Xo(new N(c),o,l)}class Ct extends gn{_toFieldTransform(e){if(e.nt!==2)throw e.nt===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ct}}function ec(n,e,t,r){const s=n.ft(1,e,t);Tn("Data must be an object, but it was:",s,r);const i=[],a=N.empty();He(r,(o,l)=>{const u=wn(e,o,t);l=P(l);const f=s._t(u);if(l instanceof Ct)i.push(u);else{const g=Dt(l,f);g!=null&&(i.push(u),a.set(u,g))}});const c=new le(i);return new as(a,c,s.fieldTransforms)}function tc(n,e,t,r,s,i){const a=n.ft(1,e,t),c=[Yt(e,r,t)],o=[s];if(i.length%2!=0)throw new d(m,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Yt(e,i[g])),o.push(i[g+1]);const l=[],u=N.empty();for(let g=c.length-1;g>=0;--g)if(!hs(l,c[g])){const R=c[g];let B=o[g];B=P(B);const Ge=a._t(R);if(B instanceof Ct)l.push(R);else{const ue=Dt(B,Ge);ue!=null&&(l.push(R),u.set(R,ue))}}const f=new le(l);return new as(u,f,a.fieldTransforms)}function Dt(n,e){if(us(n=P(n)))return Tn("Unsupported field value:",e,n),ls(n,e);if(n instanceof gn)return function(r,s){if(!os(s.nt))throw s.ct(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ct(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ot&&e.nt!==4)throw e.ct("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let o=Dt(c,s.lt(a));o==null&&(o={nullValue:"NULL_VALUE"}),i.push(o),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=P(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ro(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=V.fromDate(r);return{timestampValue:Kt(s.serializer,i)}}if(r instanceof V){const i=new V(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kt(s.serializer,i)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ye)return{bytesValue:Fo(s.serializer,r._byteString)};if(r instanceof b){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.ct(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fn(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.ct(`Unsupported field value: ${hn(r)}`)}(n,e)}function ls(n,e){const t={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):He(n,(r,s)=>{const i=Dt(s,e.st(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function us(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof V||n instanceof _n||n instanceof ye||n instanceof b||n instanceof gn)}function Tn(n,e,t){if(!us(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=hn(t);throw r==="an object"?e.ct(n+" a custom object"):e.ct(n+" "+r)}}function Yt(n,e,t){if((e=P(e))instanceof bt)return e._internalPath;if(typeof e=="string")return wn(n,e);throw It("Field path arguments must be of type string or ",n,!1,void 0,t)}const nc=new RegExp("[~\\*/\\[\\]]");function wn(n,e,t){if(e.search(nc)>=0)throw It(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bt(...e.split("."))._internalPath}catch{throw It(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function It(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let o="";return(i||a)&&(o+=" (found",i&&(o+=` in field ${r}`),a&&(o+=` in document ${s}`),o+=")"),new d(m,c+n+o)}function hs(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new b(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fs extends ds{data(){return super.data()}}class rc{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function sc(n,e){return typeof e=="string"?wn(n,e):e instanceof bt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ms extends class{convertValue(t,r="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(Me(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw _()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const s={};return He(t,(i,a)=>{s[i]=this.convertValue(a,r)}),s}convertGeoPoint(t){return new _n(y(t.latitude),y(t.longitude))}convertArray(t,r){return(t.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(t,r){switch(r){case"previous":const s=Xr(t);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(Fe(t));default:return null}}convertTimestamp(t){const r=oe(t);return new V(r.seconds,r.nanos)}convertDocumentKey(t,r){const s=w.fromString(t);O(is(s));const i=new Ve(s.get(1),s.get(3)),a=new S(s.popFirst(5));return i.isEqual(r)||ln(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new b(this.firestore,null,t)}}function Y(n){const e=Ke((n=ve(n,b)).firestore),t=new ms(n.firestore);return Ko(e,[n._key]).then(r=>{O(r.length===1);const s=r[0];return new ds(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function ic(n){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new d(Hr,"limitToLast() queries require specifying at least one orderBy() clause")})((n=ve(n,kt))._query);const e=Ke(n.firestore),t=new ms(n.firestore);return Go(e,n._query).then(r=>{const s=r.map(i=>new fs(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new rc(n,s)})}function or(n,e,t){const r=ps((n=ve(n,b)).converter,e,t),s=cs(In(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return mn(Ke(n.firestore),[s.toMutation(n._key,se.none())])}function he(n,e,t,...r){const s=In((n=ve(n,b)).firestore);let i;return i=typeof(e=P(e))=="string"||e instanceof bt?tc(s,"updateDoc",n._key,e,t,r):ec(s,"updateDoc",n._key,e),mn(Ke(n.firestore),[i.toMutation(n._key,se.exists(!0))])}function ac(n,e){const t=v(n=ve(n,z)),r=ps(n.converter,e),s=cs(In(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return mn(Ke(n.firestore),[s.toMutation(t._key,se.exists(!1))]).then(()=>t)}(function(){(function(t){we=t})(`${Ie}_lite`),$t(new jt("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new St(new Ja(e.getProvider("auth-internal")),new eo(e.getProvider("app-check-internal")),function(c,o){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new d(m,'"projectId" not provided in firebase.initializeApp.');return new Ve(c.options.projectId,o)}(s,t),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),at("firestore-lite","4.1.1",""),at("firestore-lite","4.1.1","esm2017")})();const cr=Ua(),I=Yo(),Ee=et.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",et.stopTimer),n.addEventListener("mouseleave",et.resumeTimer)}}),lr=et.mixin({confirmButtonColor:"#ff715f"}),yc=bs("dataStore",{state:()=>({loading:!0,courseData:{},myCoursesState:"student",displayState:"list",ckeditorState:!1,updateNameState:!1,updateTeacherDataState:!1,bookmarkIds:[],bookmarkNum:0,beATeacherData:{uid:"",displayName:"",gender:"",courseImg:"",courseName:"",courseIntro:"",courseCategory:"",courseMethod:[],cityName:"",time:"",price:0,whoBuy:[],onSale:!0},createCourseStep:0,AllCoursesFirebaseData:[],otherTeacherData:[],teacherData:{uid:"",accountCreateTime:"",lastLogInTime:"",email:"",displayName:"",teacherImg:"",gender:"",birthday:"",address:"",phoneNumber:"",teachArea:[],teacherIntro:"",ckeditor:"",ckeditorImg:"",instagram:"",facebook:"",discord:"",expertise:[],educationalBackground:"",myTeachCourses:[],language:[],musicStyle:[],allTeachTime:0,studentAssess:[],calenderTeacherColor:{color:"#c3dcbe",textColor:"#000000"},calenderStudentColor:{color:"#c5b2d6",textColor:"#000000"}},studentData:{myStudyCourses:[],myCart:[],payHistory:[],allStudyTime:0,myBookmarkCourses:[],myBookmarkTeacher:[]},couponData:[],user:{},isMember:!1,userTeacherCourses:[],userStudentCourses:[],userBookmarkCourses:[],userCartCourses:[],top6courses:[],youLikeCourses:[],classScheduleData:[],classScheduleStudentData:[],classScheduleId:"",classScheduleIndex:0,classScheduleTime:"",calenderDataAll:[],calenderDataNameTemp:""}),actions:{async SetFirebaseMemberData(){this.teacherData.uid=this.user.uid,this.teacherData.email=this.user.email,this.teacherData.accountCreateTime=this.user.metadata.creationTime,await or(v(I,this.user.uid,"teacher"),this.teacherData),await or(v(I,this.user.uid,"student"),this.studentData),console.log("成功建立老師端學生端物件"),M.push("/")},async SetFirebaseCourseData(){this.beATeacherData.uid=this.user.uid,this.beATeacherData.displayName=this.teacherData.displayName,this.beATeacherData.gender=this.teacherData.gender,this.beATeacherData.teacherIntro=this.teacherData.teacherIntro,this.beATeacherData.whoBuy=[];const n="MusicTutorCourses";console.log(this.beATeacherData),await ac(ar(I,n),this.beATeacherData),M.push("/CreateCourses/BeATeacherStep4"),this.onAuthStateChanged(),this.beATeacherData.uid="",this.beATeacherData.displayName="",this.beATeacherData.gender="",this.beATeacherData.courseImg="",this.beATeacherData.teacherIntro="",this.beATeacherData.courseName="",this.beATeacherData.courseIntro="",this.beATeacherData.courseCategory="",this.beATeacherData.courseMethod=[],this.beATeacherData.cityName="",this.beATeacherData.time=0,this.beATeacherData.price=0,this.beATeacherData.whoBuy=[]},async UpdateFirebaseMemberData(){const n=v(I,this.user.uid,"teacher");await he(n,this.teacherData),Ee.fire({icon:"success",title:"老師端資料更新成功"}),this.onAuthStateChanged()},async UpdateFirebaseUserCourseData(n){this.beATeacherData.courseImg&&(this.courseData.courseImg=this.beATeacherData.courseImg),console.log(this.courseData);const e=v(I,"MusicTutorCourses",n);await he(e,this.courseData),Ee.fire({icon:"success",title:"課程資料更新成功"})},async UpdateTeacherCalender(){const n=v(I,this.user.uid,"teacher");await he(n,this.teacherData),Ee.fire({icon:"success",title:"行事曆資料更新成功"}),this.calenderDataAll=[],this.getTeachDate(),this.getStudyDate()},async updateUserName(){const n=v(I,this.user.uid,"teacher");await he(n,{displayName:this.teacherData.displayName}),this.userTeacherCourses.forEach(async e=>{const t=v(I,"MusicTutorCourses",e.id);await he(t,{displayName:this.teacherData.displayName})}),Ee.fire({icon:"success",title:"老師端姓名更新成功"})},async getTeacherFirebaseData(){const n=v(I,this.user.uid,"teacher"),e=await Y(n);e.exists()?(console.log("用戶老師端資料:",e.data()),this.teacherData=e.data(),M.currentRoute._value.fullPath==="/CreateCourses/BeATeacherStep1"&&(!this.teacherData.displayName||!this.teacherData.teacherIntro||!this.teacherData.teacherImg||!this.teacherData.gender)&&(console.log(this.teacherData.displayName,this.teacherData.teacherIntro,this.teacherData.gender,this.teacherData.teacherImg),lr.fire("請先填寫老師姓名、大頭照、性別、自我介紹"),M.push("/MemberPage"))):console.log("No such teacher document!")},async getStudentFirebaseData(){const n=v(I,this.user.uid,"student"),e=await Y(n);e.exists()?(console.log("用戶學生端資料:",e.data()),this.studentData=e.data()):console.log("No such student document!")},async getAllCoursesFirebaseData(){this.loading=!0;const n=await ic(ar(I,"MusicTutorCourses"));this.AllCoursesFirebaseData=[],n._docs.forEach(e=>{const t={id:e.id,createdTime:e._document.createTime.timestamp.seconds,data:e.data()};this.AllCoursesFirebaseData.push(t)}),console.log("全部課程資料",this.AllCoursesFirebaseData),this.getTop6courses(),this.getSameTeacherCourses(this.courseData.uid),this.user.uid?(this.getCouponData(),await this.getUserTeacherCourses(),await this.getUserStudentCourses(),(M.currentRoute._value.fullPath==="/MyCalendar"||M.currentRoute._value.fullPath==="/MyCourses")&&(this.calenderDataAll=[],await this.getTeachDate(),await this.getStudyDate(),console.log("行事曆全部資料",this.calenderDataAll)),this.getUserCartCourses(),this.getBookmarkCoursesData(),this.loading=!1):this.loading=!1},async getCouponData(){const n=v(I,"coupon","code"),e=await Y(n);e.exists()?(this.couponData=e.data(),console.log("後台優惠券資料:",this.couponData)):console.log("No such OneCourses document!")},async getOneCoursesFirebaseData(n){const e=v(I,"MusicTutorCourses",n),t=await Y(e);if(t.exists()){console.log("單一課程資料",t.data()),this.courseData=t.data();const r={id:n};this.courseData=Object.assign(this.courseData,r),this.getTeacherPhoto(this.courseData.uid),M.push(`/coursePage/${n}`)}else console.log("No such OneCourses document!")},async getTeacherPhoto(n){const e=v(I,n,"teacher"),t=await Y(e);this.courseData.teacherImg=t.data().teacherImg},async getOneTeacherFirebaseData(n){if(n===this.user.uid)M.push("/MemberPage");else{const e=v(I,n,"teacher"),t=await Y(e);console.log("某某老師資料",t.data()),this.otherTeacherData=t.data(),M.push(`/teacherPage/${n}`)}},async getUserTeacherCourses(){this.AllCoursesFirebaseData?(this.userTeacherCourses=this.AllCoursesFirebaseData.filter(n=>n.data.uid===this.user.uid),console.log("用戶老師端課程資料",this.userTeacherCourses)):console.log("沒取得所有課程")},async getUserStudentCourses(){this.studentData.myStudyCourses?(this.userStudentCourses=[],this.studentData.myStudyCourses.forEach(n=>{let e={},t=this.AllCoursesFirebaseData.filter(s=>s.id===n.courseId);e=JSON.parse(JSON.stringify(t)),e[0].timestamp=n.timestamp;let r={};r=e[0].data.whoBuy.filter(s=>s.timestamp===n.timestamp),e[0].classSchedule=r[0].classSchedule,this.userStudentCourses.push(e[0])}),this.UserStudentCoursesMerge()):console.log("無學生端資料")},UserStudentCoursesMerge(){const n=new Set;this.userStudentCourses=this.userStudentCourses.filter(e=>n.has(e.id)?!1:n.add(e.id)),console.log("用戶學生端課程資料",this.userStudentCourses)},getUserCartCourses(){this.AllCoursesFirebaseData?(this.userCartCourses=[],this.studentData.myCart.forEach(n=>{let e={};e=this.AllCoursesFirebaseData.filter(t=>t.id===n.courseId),e.timestamp=n.timestamp,this.userCartCourses.push(e)}),console.log("用戶購物車內課程",this.userCartCourses)):console.log("完全沒有課程")},getTop6courses(){this.top6courses=[],this.AllCoursesFirebaseData.sort((n,e)=>e.data.whoBuy.length-n.data.whoBuy.length),this.top6courses=this.AllCoursesFirebaseData.slice(0,10),console.log("人氣前10",this.top6courses)},getSameTeacherCourses(n){this.youLikeCourses=[],this.AllCoursesFirebaseData?(this.youLikeCourses=this.AllCoursesFirebaseData.filter(e=>e.data.uid===n),console.log("猜你喜歡",this.youLikeCourses)):console.log("完全沒有課程")},SetUpTeacherClassSchedule(n){this.classScheduleData=n.data.whoBuy,this.classScheduleId=n.id},async UpDateClassSchedule(){this.classScheduleData[this.classScheduleIndex].classSchedule=this.classScheduleTime;const n=v(I,"MusicTutorCourses",this.classScheduleId);await he(n,{whoBuy:this.classScheduleData}),this.classScheduleTime="",this.classScheduleId="",this.classScheduleIndex=0,Ee.fire({icon:"success",title:"設定上課時間成功"})},lookStudentClassSchedule(n){this.classScheduleData=[],this.classScheduleData=n.data.whoBuy.filter(e=>e.uid===this.teacherData.uid)},async getTeachDate(){this.userTeacherCourses.forEach(n=>{n.data.whoBuy.forEach(async e=>{const t=v(I,e.uid,"teacher"),r=await Y(t);if(e.studentName=r.data().displayName,e.classSchedule){let s={};s.title=n.data.courseName,s.color=this.teacherData.calenderTeacherColor.color,s.textColor=this.teacherData.calenderTeacherColor.textColor,s.allDay=!1,s.start=Ye(e.classSchedule).format("YYYY-MM-DD HH:mm"),s.end=Ye(e.classSchedule).add(n.data.time,"minute").format("YYYY-MM-DD HH:mm"),this.calenderDataAll.push(s)}})})},async getStudyDate(){this.userStudentCourses.forEach(n=>{n.data.whoBuy.forEach(async e=>{const t=v(I,e.uid,"teacher"),r=await Y(t);if(e.studentName=r.data().displayName,e.classSchedule){let s={};s.title=n.data.courseName,s.color=this.teacherData.calenderStudentColor.color,s.textColor=this.teacherData.calenderStudentColor.textColor,s.allDay=!1,s.start=Ye(e.classSchedule).format("YYYY-MM-DD HH:mm"),s.end=Ye(e.classSchedule).add(n.data.time,"minute").format("YYYY-MM-DD HH:mm"),this.calenderDataAll.push(s)}})})},async onAuthStateChanged(){Ln(cr,n=>{console.log("user端資料",n),n?(this.user=n,this.isMember=!0,this.getTeacherFirebaseData(),this.getStudentFirebaseData(),this.getAllCoursesFirebaseData()):(this.isMember=!1,this.getAllCoursesFirebaseData(),console.log("已登出"))})},async onAuthStateChangedForCreateCourse(){Ln(cr,n=>{n?(this.user=n,this.isMember=!0,this.getTeacherFirebaseData(),console.log("開課囉")):(this.isMember=!1,M.push("/UserLogin"),console.log("已登出"))})},getBookmarkIds(){this.bookmarkIds=JSON.parse(localStorage.getItem("bookmarkIds"))||[]},getBookmarkCoursesData(){this.getBookmarkIds(),this.userBookmarkCourses=[],this.AllCoursesFirebaseData.forEach(n=>{this.bookmarkIds.indexOf(n.id)>-1&&this.userBookmarkCourses.push(n)}),this.bookmarkNum=this.userBookmarkCourses.length,console.log("用戶收藏課程資料",this.userBookmarkCourses)},toggleBookmark(n){const e=n;if(!this.bookmarkIds.some(r=>r===e))this.bookmarkIds.push(n),localStorage.setItem("bookmarkIds",JSON.stringify(this.bookmarkIds));else{const r=this.bookmarkIds.find(s=>s===e);this.bookmarkIds.splice(this.bookmarkIds.indexOf(r),1),localStorage.setItem("bookmarkIds",JSON.stringify(this.bookmarkIds))}this.getBookmarkCoursesData()},async uploadPhoto(n,e){try{const t=e.target.files[0];if(!t)return;const r=await this.beforeUpload(t);if(!r.isValid)throw r.errorMessages;this.to64(n,t)}catch(t){lr.fire(t),console.log("Catch Error: ",t)}finally{e.target.value=""}},beforeUpload(n){return new Promise(e=>{const r=["image/jpeg","image/png"].includes(n.type),s=[];r||s.push("需上傳 JPG 或 PNG 檔!");const i=n.size/1024/1024<.15;i||s.push("圖片大小需小於0.15MB!"),e({isValid:r&&i,errorMessages:s.join(`
`)})})},to64(n,e){const t=new FormData;t.append("iFile",e);const r=t.get("iFile"),s=new FileReader,i=r.type;s.readAsDataURL(r),s.onload=a=>{/^image\/[jpeg|png|gif]/.test(i)&&(n==="teacher"?(this.teacherData.teacherImg=a.target.result,this.UpdateFirebaseMemberData()):n==="ckeditor"?(this.teacherData.ckeditorImg=a.target.result,this.UpdateFirebaseMemberData()):n==="course"&&(this.beATeacherData.courseImg=a.target.result))}}},getters:{bookmarkState(){return n=>this.bookmarkIds.indexOf(n)>-1?"bi bi bi-bookmark-fill text-white bookmark-on":"bi bi-bookmark text-white bookmark-off"}}});export{J as F,Q as G,hc as a,fc as b,uc as c,yc as d,X as e,lc as f,Ua as g,Ln as o,dc as s};
