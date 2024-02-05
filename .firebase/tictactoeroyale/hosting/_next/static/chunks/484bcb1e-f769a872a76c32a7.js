"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{3023:function(e,t,n){var r,i,s=n(3454);Object.defineProperty(t,"__esModule",{value:!0});var a=n(5752),o=n(9730),l=n(7019),u=n(1313),c=n(3582);let h="@firebase/firestore";/**
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
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
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
 */let f="10.7.0",m=new l.Logger("@firebase/firestore");function g(){return m.logLevel}function p(e,...t){if(m.logLevel<=l.LogLevel.DEBUG){let n=t.map(v);m.debug(`Firestore (${f}): ${e}`,...n)}}function y(e,...t){if(m.logLevel<=l.LogLevel.ERROR){let n=t.map(v);m.error(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=l.LogLevel.WARN){let n=t.map(v);m.warn(`Firestore (${f}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function I(e="Unexpected state"){let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;throw y(t),Error(t)}/**
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
 */let _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends u.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class E{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||I(),new E(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||I(),new d(e)}}class D{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class N{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||I(),this.R=e.token,new A(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class M{getToken(){return Promise.resolve(new A(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class R{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */class P{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new P(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new P(0,0))}static max(){return new O(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&I(),void 0===n?n=e.length-t:n>e.length-t&&I(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends V{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new b(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends V{construct(e,t,n){return new B(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new b(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new b(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new b(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(q.fromString(e))}static fromName(e){return new z(q.fromString(e).popFirst(5))}static empty(){return new z(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new q(e.slice()))}}/**
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
 */class G{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function K(e){return e.fields.find(e=>2===e.kind)}function $(e){return e.fields.filter(e=>2!==e.kind)}function Q(e,t){let n=F(e.collectionGroup,t.collectionGroup);if(0!==n)return n;for(let r=0;r<Math.min(e.fields.length,t.fields.length);++r)if(0!==(n=function(e,t){let n=B.comparator(e.fieldPath,t.fieldPath);return 0!==n?n:F(e.kind,t.kind)}(e.fields[r],t.fields[r])))return n;return F(e.fields.length,t.fields.length)}G.UNKNOWN_ID=-1;class j{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,J.min())}}function Y(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new J(O.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r)),z.empty(),t)}function H(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(O.min(),z.empty(),-1)}static max(){return new J(O.max(),z.empty(),-1)}}function X(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=z.comparator(e.documentKey,t.documentKey))?n:F(e.largestBatchId,t.largestBatchId)}/**
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
 */let Z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function et(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==Z)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class en{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new en((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof en?t:en.resolve(t)}catch(e){return en.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):en.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):en.reject(t)}static resolve(e){return new en((t,n)=>{t(e)})}static reject(e){return new en((t,n)=>{n(e)})}static waitFor(e){return new en((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=en.resolve(!1);for(let n of e)t=t.next(e=>e?en.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new en((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new en((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */class er{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new T,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ea(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=eh(t.target.error);this.V.reject(new ea(e,n))}}static open(e,t,n,r){try{return new er(t,e.transaction(r,n))}catch(e){throw new ea(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new el(this.transaction.objectStore(e))}}class ei{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===ei.S(u.getUA())&&y("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),eu(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!u.isIndexedDBAvailable())return!1;if(ei.C())return!0;let e=u.getUA(),t=ei.S(e),n=ei.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==s&&"YES"===(null===(e=s.env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new b(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new b(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ea(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=er.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),en.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class es{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return eu(this.k.delete())}}class ea extends b{constructor(e,t){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eo(e){return"IndexedDbTransactionError"===e.name}class el{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eu(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),eu(this.store.add(e))}get(e){return eu(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),eu(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),eu(this.store.count())}W(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new en((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new en((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){p("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let r=this.cursor(n);return this.G(r,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.G(r,t)}Z(e){let t=this.cursor({});return new en((n,r)=>{t.onerror=e=>{r(eh(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}G(e,t){let n=[];return new en((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new es(i),a=t(i.primaryKey,i.value,s);if(a instanceof en){let e=a.catch(e=>(s.done(),en.reject(e)));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}}).next(()=>en.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eu(e){return new en((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(eh(e.target.error))}})}let ec=!1;function eh(e){let t=ei.S(u.getUA());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw e},0)),e}}return e}class ed{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ee(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(e){eo(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await et(e)}await this.ee(6e4)})}}class ef{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){let n=new Set,r=t,i=!0;return en.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller",`Processing collection: ${t}`),this.re(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}re(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ie(r,n)).next(n=>(p("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ie(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=H(t);X(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class em{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function eg(e){return null==e}function ep(e){return 0===e&&1/e==-1/0}function ey(e){return"number"==typeof e&&Number.isInteger(e)&&!ep(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function ew(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"}function ev(e){let t=e.length;if(t>=2||I(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||I(),q.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&I(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:I()}s=t+2}return new q(r)}em._e=-1;/**
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
 */let eI=["userId","batchId"],e_={},eb=["prefixPath","collectionGroup","readTime","documentId"],eT=["prefixPath","collectionGroup","documentId"],eE=["collectionGroup","readTime","prefixPath","documentId"],eS=["canonicalId","targetId"],ex=["targetId","path"],eC=["path","targetId"],eD=["collectionId","parent"],eN=["indexId","uid"],eA=["uid","sequenceNumber"],ek=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eM=["indexId","uid","orderedDocumentKey"],eR=["userId","collectionPath","documentId"],eF=["userId","collectionPath","largestBatchId"],eL=["userId","collectionGroup","largestBatchId"],eP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eO=[...eP,"documentOverlays"],eV=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eq=[...eV,"indexConfiguration","indexState","indexEntries"];/**
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
 */class eU extends ee{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function eB(e,t){return ei.M(e.ae,t)}/**
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
 */function ez(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eG(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eK(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class e${constructor(e,t){this.comparator=e,this.root=t||ej.EMPTY}insert(e,t){return new e$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ej.BLACK,null,null))}remove(e){return new e$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ej.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eQ(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eQ(this.root,e,this.comparator,!1)}getReverseIterator(){return new eQ(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eQ(this.root,e,this.comparator,!0)}}class eQ{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ej{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ej.RED,this.left=null!=r?r:ej.EMPTY,this.right=null!=i?i:ej.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ej(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ej.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ej.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ej.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ej.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();let e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ej.EMPTY=null,ej.RED=!0,ej.BLACK=!1,ej.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ej(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class eW{constructor(e){this.comparator=e,this.data=new e$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eY(this.data.getIterator())}getIteratorFrom(e){return new eY(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eW)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eW(this.comparator);return t.data=e,t}}class eY{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eH(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class eJ{constructor(e){this.fields=e,e.sort(B.comparator)}static empty(){return new eJ([])}unionWith(e){let t=new eW(B.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eJ(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class eX extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class eZ{constructor(e){this.binaryString=e}static fromBase64String(e){return new eZ(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eX("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eZ(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eZ.EMPTY_BYTE_STRING=new eZ("");let e0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e1(e){if(e||I(),"string"==typeof e){let t=0,n=e0.exec(e);if(n||I(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:e2(e.seconds),nanos:e2(e.nanos)}}function e2(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function e5(e){return"string"==typeof e?eZ.fromBase64String(e):eZ.fromUint8Array(e)}/**
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
 */function e4(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function e3(e){let t=e.mapValue.fields.__previous_value__;return e4(t)?e3(t):t}function e8(e){let t=e1(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */class e6{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class e9{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new e9("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof e9&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let e7={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},te={nullValue:"NULL_VALUE"};function tt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e4(e)?4:tm(e)?9007199254740991:10:I()}function tn(e,t){if(e===t)return!0;let n=tt(e);if(n!==tt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e8(e).isEqual(e8(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e1(e.timestampValue),r=e1(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return e5(e.bytesValue).isEqual(e5(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e2(e.geoPointValue.latitude)===e2(t.geoPointValue.latitude)&&e2(e.geoPointValue.longitude)===e2(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e2(e.integerValue)===e2(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e2(e.doubleValue),r=e2(t.doubleValue);return n===r?ep(n)===ep(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],tn);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ez(n)!==ez(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tn(n[e],r[e])))return!1;return!0}(e,t);default:return I()}}function tr(e,t){return void 0!==(e.values||[]).find(e=>tn(e,t))}function ti(e,t){if(e===t)return 0;let n=tt(e),r=tt(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e2(e.integerValue||e.doubleValue),r=e2(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ts(e.timestampValue,t.timestampValue);case 4:return ts(e8(e),e8(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){let n=e5(e),r=e5(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=F(n[e],r[e]);if(0!==t)return t}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=F(e2(e.latitude),e2(t.latitude));return 0!==n?n:F(e2(e.longitude),e2(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ti(n[e],r[e]);if(t)return t}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===e7.mapValue&&t===e7.mapValue)return 0;if(e===e7.mapValue)return 1;if(t===e7.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=F(r[e],s[e]);if(0!==t)return t;let a=ti(n[r[e]],i[s[e]]);if(0!==a)return a}return F(r.length,s.length)}(e.mapValue,t.mapValue);default:throw I()}}function ts(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);let n=e1(e),r=e1(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos)}function ta(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e1(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?e5(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,z.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ta(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${ta(e.fields[i])}`;return n+"}"}(e.mapValue):I()}function to(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tl(e){return!!e&&"integerValue"in e}function tu(e){return!!e&&"arrayValue"in e}function tc(e){return!!e&&"nullValue"in e}function th(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function td(e){return!!e&&"mapValue"in e}function tf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eG(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tf(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tf(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tm(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tg(e,t){let n=ti(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function tp(e,t){let n=ti(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class ty{constructor(e){this.value=e}static empty(){return new ty({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!td(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tf(t)}setAll(e){let t=B.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tf(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());td(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];td(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eG(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new ty(tf(this.value))}}/**
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
 */class tw{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tw(e,0,O.min(),O.min(),O.min(),ty.empty(),0)}static newFoundDocument(e,t,n,r){return new tw(e,1,t,O.min(),n,r,0)}static newNoDocument(e,t){return new tw(e,2,t,O.min(),O.min(),ty.empty(),0)}static newUnknownDocument(e,t){return new tw(e,3,t,O.min(),O.min(),ty.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(O.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ty.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ty.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tw&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tw(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tv{constructor(e,t){this.position=e,this.inclusive=t}}function tI(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?z.comparator(z.fromName(a.referenceValue),n.key):ti(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function t_(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tb{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class tT{}class tE extends tT{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tk(e,t,n):"array-contains"===t?new tL(e,n):"in"===t?new tP(e,n):"not-in"===t?new tO(e,n):"array-contains-any"===t?new tV(e,n):new tE(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tM(e,n):new tR(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ti(t,this.value)):null!==t&&tt(this.value)===tt(t)&&this.matchesComparison(ti(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tS extends tT{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new tS(e,t)}matches(e){return tx(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function tx(e){return"and"===e.op}function tC(e){return"or"===e.op}function tD(e){return tN(e)&&tx(e)}function tN(e){for(let t of e.filters)if(t instanceof tS)return!1;return!0}function tA(e,t){let n=e.filters.concat(t);return tS.create(n,e.op)}class tk extends tE{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){let t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class tM extends tE{constructor(e,t){super(e,"in",t),this.keys=tF("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tR extends tE{constructor(e,t){super(e,"not-in",t),this.keys=tF("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tF(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>z.fromName(e.referenceValue))}class tL extends tE{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tu(t)&&tr(t.arrayValue,this.value)}}class tP extends tE{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&tr(this.value.arrayValue,t)}}class tO extends tE{constructor(e,t){super(e,"not-in",t)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!tr(this.value.arrayValue,t)}}class tV extends tE{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>tr(this.value.arrayValue,e))}}/**
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
 */class tq{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function tU(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tq(e,t,n,r,i,s,a)}function tB(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tE)return t.field.canonicalString()+t.op.toString()+ta(t.value);if(tD(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eg(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ta(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ta(e)).join(",")),e.ce=t}return e.ce}function tz(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tE?n instanceof tE&&t.op===n.op&&t.field.isEqual(n.field)&&tn(t.value,n.value):t instanceof tS?n instanceof tS&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void I()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!t_(e.startAt,t.startAt)&&t_(e.endAt,t.endAt)}function tG(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tK(e,t){return e.filters.filter(e=>e instanceof tE&&e.field.isEqual(t))}function t$(e,t,n){let r=te,i=!0;for(let n of tK(e,t)){let e=te,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?te:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?to(e9.empty(),z.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:I();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=te}0>tg({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tg({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tQ(e,t,n){let r=e7,i=!0;for(let n of tK(e,t)){let e=e7,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?to(e9.empty(),z.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?e7:I(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=e7}tp({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];tp({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class tj{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function tW(e){return new tj(e)}function tY(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tH(e){return null!==e.collectionGroup}function tJ(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new eW(B.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new tb(t,r))}),n.has(B.keyField().canonicalString())||e.le.push(new tb(B.keyField(),r))}return e.le}function tX(e){return e.he||(e.he=tZ(e,tJ(e))),e.he}function tZ(e,t){if("F"===e.limitType)return tU(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new tb(e.field,t)});let n=e.endAt?new tv(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tv(e.startAt.position,e.startAt.inclusive):null;return tU(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function t0(e,t){let n=e.filters.concat([t]);return new tj(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t1(e,t,n){return new tj(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t2(e,t){return tz(tX(e),tX(t))&&e.limitType===t.limitType}function t5(e){return`${tB(tX(e))}|lt:${e.limitType}`}function t4(e){var t;let n;return`Query(target=${n=(t=tX(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tE?`${t.field.canonicalString()} ${t.op} ${ta(t.value)}`:t instanceof tS?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ta(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ta(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function t3(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):z.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tJ(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tI(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tJ(e),t))&&(!e.endAt||!!function(e,t,n){let r=tI(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tJ(e),t))}function t8(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function t6(e){return(t,n)=>{let r=!1;for(let i of tJ(e)){let e=function(e,t,n){let r=e.field.isKeyField()?z.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ti(r,i):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return I()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */class t9{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eG(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eK(this.inner)}size(){return this.innerSize}}/**
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
 */let t7=new e$(z.comparator),ne=new e$(z.comparator);function nt(...e){let t=ne;for(let n of e)t=t.insert(n.key,n);return t}function nn(e){let t=ne;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function nr(){return new t9(e=>e.toString(),(e,t)=>e.isEqual(t))}let ni=new e$(z.comparator),ns=new eW(z.comparator);function na(...e){let t=ns;for(let n of e)t=t.add(n);return t}let no=new eW(F);/**
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
 */function nl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ep(t)?"-0":t}}function nu(e){return{integerValue:""+e}}function nc(e,t){return ey(t)?nu(t):nl(e,t)}/**
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
 */class nh{constructor(){this._=void 0}}function nd(e,t){return e instanceof nw?tl(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nf extends nh{}class nm extends nh{constructor(e){super(),this.elements=e}}function ng(e,t){let n=nI(t);for(let t of e.elements)n.some(e=>tn(e,t))||n.push(t);return{arrayValue:{values:n}}}class np extends nh{constructor(e){super(),this.elements=e}}function ny(e,t){let n=nI(t);for(let t of e.elements)n=n.filter(e=>!tn(e,t));return{arrayValue:{values:n}}}class nw extends nh{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function nv(e){return e2(e.integerValue||e.doubleValue)}function nI(e){return tu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class n_{constructor(e,t){this.field=e,this.transform=t}}class nb{constructor(e,t){this.version=e,this.transformResults=t}}class nT{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nT}static exists(e){return new nT(void 0,e)}static updateTime(e){return new nT(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nE(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nS{}function nx(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nF(e.key,nT.none()):new nN(e.key,e.data,nT.none());{let n=e.data,r=ty.empty(),i=new eW(B.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nA(e.key,r,new eJ(i.toArray()),nT.none())}}function nC(e,t,n,r){return e instanceof nN?function(e,t,n,r){if(!nE(e.precondition,t))return n;let i=e.value.clone(),s=nR(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nA?function(e,t,n,r){if(!nE(e.precondition,t))return n;let i=nR(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nk(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):nE(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nD(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof nm&&r instanceof nm||n instanceof np&&r instanceof np?L(n.elements,r.elements,tn):n instanceof nw&&r instanceof nw?tn(n.Ie,r.Ie):n instanceof nf&&r instanceof nf)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nN extends nS{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nA extends nS{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nk(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nM(e,t,n){var r;let i=new Map;e.length===n.length||I();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof nm?ng(o,l):o instanceof np?ny(o,l):r))}return i}function nR(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof nf?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e4(t)&&(t=e3(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof nm?ng(e,s):e instanceof np?ny(e,s):function(e,t){let n=nd(e,t),r=nv(n)+nv(e.Ie);return tl(n)&&tl(e.Ie)?nu(r):nl(e.serializer,r)}(e,s))}return r}class nF extends nS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nL extends nS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nN?function(e,t,n){let r=e.value.clone(),i=nM(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nA?function(e,t,n){if(!nE(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nM(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nk(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nC(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nC(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=nr();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=nx(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),na())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>nD(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>nD(e,t))}}class nO{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||I();let r=ni,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nO(e,t,n,r)}}/**
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
 */class nV{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class nq{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
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
 */class nU{constructor(e,t){this.count=e,this.unchangedNames=t}}function nB(e){switch(e){default:return I();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function nz(e){if(void 0===e)return y("GRPC error has no .code"),_.UNKNOWN;switch(e){case r.OK:return _.OK;case r.CANCELLED:return _.CANCELLED;case r.UNKNOWN:return _.UNKNOWN;case r.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case r.INTERNAL:return _.INTERNAL;case r.UNAVAILABLE:return _.UNAVAILABLE;case r.UNAUTHENTICATED:return _.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case r.NOT_FOUND:return _.NOT_FOUND;case r.ALREADY_EXISTS:return _.ALREADY_EXISTS;case r.PERMISSION_DENIED:return _.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case r.ABORTED:return _.ABORTED;case r.OUT_OF_RANGE:return _.OUT_OF_RANGE;case r.UNIMPLEMENTED:return _.UNIMPLEMENTED;case r.DATA_LOSS:return _.DATA_LOSS;default:return I()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let nG=null;/**
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
 */function nK(){return new TextEncoder}/**
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
 */let n$=new c.Integer([4294967295,4294967295],0);function nQ(e){let t=nK().encode(e),n=new c.Md5;return n.update(t),new Uint8Array(n.digest())}function nj(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.Integer([n,r],0),new c.Integer([i,s],0)]}class nW{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nY(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nY(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nY(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=c.Integer.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(c.Integer.fromNumber(n)));return 1===r.compare(n$)&&(r=new c.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=nj(nQ(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new nW(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=nj(nQ(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nY extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nH{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nJ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nH(O.min(),r,new e$(F),t7,na())}}class nJ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nJ(n,t,na(),na(),na())}}/**
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
 */class nX{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class nZ{constructor(e,t){this.targetId=e,this.fe=t}}class n0{constructor(e,t,n=eZ.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n1{constructor(){this.ge=0,this.pe=n4(),this.ye=eZ.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=na(),t=na(),n=na();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:I()}}),new nJ(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=n4()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||I()}Be(){this.Se=!0,this.we=!0}}class n2{constructor(e){this.Le=e,this.ke=new Map,this.qe=t7,this.Qe=n5(),this.Ke=new e$(F)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:I()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(tG(i)){if(0===n){let e=new z(i.path);this.We(t,e,tw.newNoDocument(e,O.min()))}else 1===n||I()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null==nG||nG.tt(function(e,t,n,r,i){var s,a,o,l,u,c;let h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(l=null===(o=null===(a=null==d?void 0:d.bits)||void 0===a?void 0:a.bitmap)||void 0===o?void 0:o.length)&&void 0!==l?l:0,padding:null!==(c=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==c?c:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}(r,e.fe,this.Le.nt(),n,i))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=e5(i).toUint8Array()}catch(e){if(e instanceof eX)return w("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nW(t,s,a)}catch(e){return w(e instanceof nY?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&tG(i.target)){let t=new z(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,tw.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=na();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new nH(e,t,this.Ke,this.qe,n);return this.qe=t7,this.Qe=n5(),this.Ke=new e$(F),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new n1,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new eW(F),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new n1),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function n5(){return new e$(z.comparator)}function n4(){return new e$(z.comparator)}let n3={asc:"ASCENDING",desc:"DESCENDING"},n8={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n6={and:"AND",or:"OR"};class n9{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n7(e,t){return e.useProto3Json||eg(t)?t:{value:t}}function re(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rt(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rn(e){return e||I(),O.fromTimestamp(function(e){let t=e1(e);return new P(t.seconds,t.nanos)}(e))}function rr(e,t){return new q(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ri(e){let t=q.fromString(e);return rI(t)||I(),t}function rs(e,t){return rr(e.databaseId,t.path)}function ra(e,t){let n=ri(t);if(n.get(1)!==e.databaseId.projectId)throw new b(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(rc(n))}function ro(e,t){return rr(e.databaseId,t)}function rl(e){let t=ri(e);return 4===t.length?q.emptyPath():rc(t)}function ru(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rc(e){return e.length>4&&"documents"===e.get(4)||I(),e.popFirst(5)}function rh(e,t,n){return{name:rs(e,t),fields:n.value.mapValue.fields}}function rd(e,t,n){let r=ra(e,t.name),i=rn(t.updateTime),s=t.createTime?rn(t.createTime):O.min(),a=new ty({mapValue:{fields:t.fields}}),o=tw.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rf(e,t){var n;let r;if(t instanceof nN)r={update:rh(e,t.key,t.value)};else if(t instanceof nF)r={delete:rs(e,t.key)};else if(t instanceof nA)r={update:rh(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nL))return I();r={verify:rs(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof nf)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof nm)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof np)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nw)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw I()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:re(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:I()),r}function rm(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nT.updateTime(rn(n.updateTime)):void 0!==n.exists?nT.exists(n.exists):nT.none():nT.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{let n;return n=null,"setToServerValue"in t?("REQUEST_TIME"===t.setToServerValue||I(),n=new nf):"appendMissingElements"in t?n=new nm(t.appendMissingElements.values||[]):"removeAllFromArray"in t?n=new np(t.removeAllFromArray.values||[]):"increment"in t?n=new nw(e,t.increment):I(),new n_(B.fromServerFormat(t.fieldPath),n)}):[];if(t.update){t.update.name;let n=ra(e,t.update.name),s=new ty({mapValue:{fields:t.update.fields}});return t.updateMask?new nA(n,s,new eJ((t.updateMask.fieldPaths||[]).map(e=>B.fromServerFormat(e))),r,i):new nN(n,s,r,i)}return t.delete?new nF(ra(e,t.delete),r):t.verify?new nL(ra(e,t.verify),r):I()}function rg(e,t){return{documents:[ro(e,t.path)]}}function rp(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=ro(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=ro(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof tE?function(e){if("=="===e.op){if(th(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NAN"}};if(tc(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(th(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NOT_NAN"}};if(tc(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rw(e.field),op:n8[e.op],value:e.value}}}(t):t instanceof tS?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n6[t.op],filters:n}}}(t):I()}(tS.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rw(e.field),direction:n3[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=n7(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}function ry(e){var t;let n,r=rl(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||I();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rv(e.unaryFilter.field);return tE.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=rv(e.unaryFilter.field);return tE.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=rv(e.unaryFilter.field);return tE.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rv(e.unaryFilter.field);return tE.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):void 0!==t.fieldFilter?tE.create(rv(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tS.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op)):I()}(e);return t instanceof tS&&tD(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new tb(rv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=eg(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new tv(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new tv(e.values||[],t)}(i.endAt)),new tj(r,a,l,o,u,"F",c,h)}function rw(e){return{fieldPath:e.canonicalString()}}function rv(e){return B.fromServerFormat(e.fieldPath)}function rI(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class r_{constructor(e,t,n,r,i=O.min(),s=O.min(),a=eZ.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new r_(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new r_(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rb{constructor(e){this.ut=e}}function rT(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rE(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:rs(i=e.ut,t.key),fields:t.data.value.mapValue.fields,updateTime:re(i,t.version.toTimestamp()),createTime:re(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rS(t.version)};else{if(!t.isUnknownDocument())return I();r.unknownDocument={path:n.path.toArray(),version:rS(t.version)}}return r}function rE(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rS(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rx(e){let t=new P(e.seconds,e.nanoseconds);return O.fromTimestamp(t)}function rC(e,t){let n=(t.baseMutations||[]).map(t=>rm(e.ut,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rm(e.ut,t)),i=P.fromMillis(t.localWriteTimeMs);return new nP(t.batchId,i,n,r)}function rD(e){var t;let n=rx(e.readTime),r=void 0!==e.lastLimboFreeSnapshotVersion?rx(e.lastLimboFreeSnapshotVersion):O.min();return new r_(void 0!==e.query.documents?(1===(t=e.query).documents.length||I(),tX(tW(rl(t.documents[0])))):tX(ry(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,n,r,eZ.fromBase64String(e.resumeToken))}function rN(e,t){let n;let r=rS(t.snapshotVersion),i=rS(t.lastLimboFreeSnapshotVersion);n=tG(t.target)?rg(e.ut,t.target):rp(e.ut,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tB(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rA(e){let t=ry({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t1(t,t.limit,"L"):t}function rk(e,t){return new nV(t.largestBatchId,rm(e.ut,t.overlayMutation))}function rM(e,t){let n=t.path.lastSegment();return[e,ew(t.path.popLast()),n]}function rR(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rS(r.readTime),documentKey:ew(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class rF{getBundleMetadata(e,t){return rL(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rx(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rL(e).put({bundleId:t.id,createTime:rS(rn(t.createTime)),version:t.version})}getNamedQuery(e,t){return rP(e).get(t).next(e=>{if(e)return{name:e.name,query:rA(e.bundledQuery),readTime:rx(e.readTime)}})}saveNamedQuery(e,t){return rP(e).put({name:t.name,readTime:rS(rn(t.readTime)),bundledQuery:t.bundledQuery})}}function rL(e){return eB(e,"bundles")}function rP(e){return eB(e,"namedQueries")}/**
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
 */class rO{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){return new rO(e,t.uid||"")}getOverlay(e,t){return rV(e).get(rM(this.userId,t)).next(e=>e?rk(this.serializer,e):null)}getOverlays(e,t){let n=nr();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nV(t,i);r.push(this.lt(e,s))}),en.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(ew(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rV(e).H("collectionPathOverlayIndex",r))}),en.waitFor(i)}getOverlaysForCollection(e,t,n){let r=nr(),i=ew(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rV(e).W("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rk(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=nr(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rV(e).Y({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rk(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}lt(e,t){return rV(e).put(function(e,t,n){let[r,i,s]=rM(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rf(e.ut,n.mutation)}}(this.serializer,this.userId,t))}}function rV(e){return eB(e,"documentOverlays")}/**
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
 */class rq{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(e2(e.integerValue));else if("doubleValue"in e){let n=e2(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),ep(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Tt(t,20),"string"==typeof n?t.dt(n):(t.dt(`${n.seconds||""}`),t.Et(n.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(e5(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?tm(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):I()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let n=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(n)))this.At(e,t),this.Pt(n[e],t)}yt(e,t){let n=e.values||[];for(let e of(this.Tt(t,50),n))this.Pt(e,t)}ft(e,t){this.Tt(t,37),z.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}function rU(e){return Math.ceil((64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e))/8)}rq.St=new rq;class rB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Dt(n.value),n=t.next();this.Ct()}vt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Dt(e);else if(e<2048)this.Dt(960|e>>>6),this.Dt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Dt(480|e>>>12),this.Dt(128|63&e>>>6),this.Dt(128|63&e);else{let e=t.codePointAt(0);this.Dt(240|e>>>18),this.Dt(128|63&e>>>12),this.Dt(128|63&e>>>6),this.Dt(128|63&e)}}this.Ct()}Ot(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{let e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Nt(e){let t=this.Bt(e),n=rU(t);this.Lt(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}kt(e){let t=this.Bt(e),n=rU(t);this.Lt(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Dt(e){let t=255&e;0===t?(this.Qt(0),this.Qt(255)):255===t?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){let t=255&e;0===t?(this.$t(0),this.$t(255)):255===t?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rz{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class rG{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class rK{constructor(){this.Wt=new rB,this.Gt=new rz(this.Wt),this.zt=new rG(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return 0===e?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
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
 */class r${constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ht(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new r$(this.indexId,this.documentKey,this.arrayValue,n)}}function rQ(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rj(e.arrayValue,t.arrayValue))?n:0!==(n=rj(e.directionalValue,t.directionalValue))?n:z.comparator(e.documentKey,t.documentKey)}function rj(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */class rW{constructor(e){for(let t of(this.Jt=new eW((e,t)=>B.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[],e.filters))t.isInequality()?this.Jt=this.Jt.add(t):this.Zt.push(t)}get Xt(){return this.Jt.size>1}en(e){if(e.collectionGroup===this.collectionId||I(),this.Xt)return!1;let t=K(e);if(void 0!==t&&!this.tn(t))return!1;let n=$(e),r=new Set,i=0,s=0;for(;i<n.length&&this.tn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Jt.size>0){let e=this.Jt.getIterator().getNext();if(!r.has(e.field.canonicalString())){let t=n[i];if(!this.nn(e,t)||!this.rn(this.Yt[s++],t))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Yt.length||!this.rn(this.Yt[s++],e))return!1}return!0}sn(){if(this.Xt)return null;let e=new eW(B.comparator),t=[];for(let n of this.Zt)if(!n.field.isKeyField()){if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new j(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new j(n.field,0))}}for(let n of this.Yt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new j(n.field,"asc"===n.dir?0:1)));return new G(G.UNKNOWN_ID,this.collectionId,t,W.empty())}tn(e){for(let t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rY(e){return e instanceof tE}function rH(e){return e instanceof tS&&tD(e)}function rJ(e){return rY(e)||rH(e)||function(e){if(e instanceof tS&&tC(e)){for(let t of e.getFilters())if(!rY(t)&&!rH(t))return!1;return!0}return!1}(e)}function rX(e,t){return e instanceof tE||e instanceof tS||I(),t instanceof tE||t instanceof tS||I(),r0(e instanceof tE?t instanceof tE?tS.create([e,t],"and"):rZ(e,t):t instanceof tE?rZ(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||I(),tx(e)&&tx(t))return tA(e,t.getFilters());let n=tC(e)?e:t,r=tC(e)?t:e,i=n.filters.map(e=>rX(e,r));return tS.create(i,"or")}(e,t))}function rZ(e,t){if(tx(t))return tA(t,e.getFilters());{let n=t.filters.map(t=>rX(e,t));return tS.create(n,"or")}}function r0(e){if(e instanceof tE||e instanceof tS||I(),e instanceof tE)return e;let t=e.getFilters();if(1===t.length)return r0(t[0]);if(tN(e))return e;let n=t.map(e=>r0(e)),r=[];return n.forEach(t=>{t instanceof tE?r.push(t):t instanceof tS&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:tS.create(r,e.op)}/**
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
 */class r1{constructor(){this.on=new r2}addToCollectionParentIndex(e,t){return this.on.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}deleteAllFieldIndexes(e){return en.resolve()}createTargetIndexes(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(J.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class r2{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eW(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eW(q.comparator)).toArray()}}/**
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
 */let r5=new Uint8Array(0);class r4{constructor(e,t){this.user=e,this.databaseId=t,this._n=new r2,this.an=new t9(e=>tB(e),(e,t)=>tz(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});let i={collectionId:n,parent:ew(r)};return r3(e).put(i)}return en.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return r3(e).W(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(ev(r.parent))}return n})}addFieldIndex(e,t){let n=r6(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=r9(e);return i.next(e=>{n.put(rR(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=r6(e),r=r9(e),i=r8(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=r6(e),n=r8(e),r=r9(e);return t.H().next(()=>n.H()).next(()=>r.H())}createTargetIndexes(e,t){return en.forEach(this.un(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){let n=new rW(t).sn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){let n=r8(e),r=!0,i=new Map;return en.forEach(this.un(t),t=>this.cn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=na(),r=[];return en.forEach(i,(i,s)=>{p("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tB(t)}`);let a=function(e,t){let n=K(t);if(void 0===n)return null;for(let t of tK(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of $(t))for(let t of tK(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of $(t)){let t=0===i.kind?t$(e,i.fieldPath,e.startAt):tQ(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tv(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of $(t)){let t=0===i.kind?tQ(e,i.fieldPath,e.endAt):t$(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tv(n,r)}(s,i),c=this.ln(i,s,l),h=this.ln(i,s,u),d=this.hn(i,s,o),f=this.Pn(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return en.forEach(f,i=>n.j(i,t.limit).next(t=>{t.forEach(t=>{let n=z.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return en.resolve(null)})}un(e){let t=this.an.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tE||t instanceof tS||I(),t instanceof tE)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=tS.create(n,t.op);return rJ(r=r0(r))?r:(r instanceof tS||I(),tx(r)||I(),r.filters.length>1||I(),r.filters.reduce((e,t)=>rX(e,t)))}(/**
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
 */function e(t){var n,r;if(t instanceof tE||t instanceof tS||I(),t instanceof tE){if(t instanceof tP){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tE.create(t.field,"==",e)))||[];return tS.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return tS.create(i,t.op)}(e));return rJ(t)||I(),rY(t)||rH(t)?[t]:t.getFilters()})(tS.create(e.filters,"and")).map(t=>tU(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t)),t}Pn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.In(t[c/l]):r5,h=this.Tn(e,o,n[c%l],r),d=this.En(e,o,i[c%l],s),f=a.map(t=>this.Tn(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}Tn(e,t,n,r){let i=new r$(e,z.empty(),t,n);return r?i:i.Ht()}En(e,t,n,r){let i=new r$(e,z.empty(),t,n);return r?i.Ht():i}cn(e,t){let n=new rW(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.en(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.un(t);return en.forEach(r,t=>this.cn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eW(B.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}dn(e,t){let n=new rK;for(let r of $(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.jt(r.kind);rq.St.ht(e,i)}return n.Ut()}In(e){let t=new rK;return rq.St.ht(e,t.jt(0)),t.Ut()}An(e,t){let n=new rK;return rq.St.ht(to(this.databaseId,t),n.jt(function(e){let t=$(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Ut()}hn(e,t,n){if(null===n)return[];let r=[];r.push(new rK);let i=0;for(let s of $(e)){let e=n[i++];for(let n of r)if(this.Rn(t,s.fieldPath)&&tu(e))r=this.Vn(r,s,e);else{let t=n.jt(s.kind);rq.St.ht(e,t)}}return this.mn(r)}ln(e,t,n){return this.hn(e,t,n.position)}mn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ut();return t}Vn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rK;r.seed(n.Ut()),rq.St.ht(e,r.jt(t.kind)),i.push(r)}return i}Rn(e,t){return!!e.filters.find(e=>e instanceof tE&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=r6(e),r=r9(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{let t=[];return en.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new W(t.sequenceNumber,new J(rx(t.readTime),new z(ev(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new j(B.fromServerFormat(e),t));return new G(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:F(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=r6(e),i=r9(e);return this.fn(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>en.forEach(t,t=>i.put(rR(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return en.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?en.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),en.forEach(i,n=>this.gn(e,t,n).next(t=>{let i=this.pn(r,n);return t.isEqual(i)?en.resolve():this.yn(e,r,n,t,i)}))))})}wn(e,t,n,r){return r8(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.An(n,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,n,r){return r8(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.An(n,t.key),t.key.path.toArray()])}gn(e,t,n){let r=r8(e),i=new eW(rQ);return r.Y({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.An(n,t)])},(e,r)=>{i=i.add(new r$(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}pn(e,t){let n=new eW(rQ),r=this.dn(t,e);if(null==r)return n;let i=K(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tu(s))for(let i of s.arrayValue.values||[])n=n.add(new r$(t.indexId,e.key,this.In(i),r))}else n=n.add(new r$(t.indexId,e.key,r5,r));return n}yn(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=eH(s),l=eH(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=eH(a)):t?(i(o),o=eH(s)):(o=eH(s),l=eH(a))}}(r,i,rQ,r=>{s.push(this.wn(e,t,n,r))},r=>{s.push(this.Sn(e,t,n,r))}),en.waitFor(s)}fn(e){let t=1;return r9(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rQ(e,t)).filter((e,t,n)=>!t||0!==rQ(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rQ(i,e),s=rQ(i,t);if(0===n)r[0]=e.Ht();else if(n>0&&s<0)r.push(i),r.push(i.Ht());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.bn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r5,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r5,[]];i.push(IDBKeyRange.bound(t,n))}return i}bn(e,t){return rQ(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(r7)}getMinOffset(e,t){return en.mapArray(this.un(t),t=>this.cn(e,t).next(e=>e||I())).next(r7)}}function r3(e){return eB(e,"collectionParents")}function r8(e){return eB(e,"indexEntries")}function r6(e){return eB(e,"indexConfiguration")}function r9(e){return eB(e,"indexState")}function r7(e){0!==e.length||I();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>X(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new J(t.readTime,t.documentKey,n)}/**
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
 */let ie={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class it{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ir(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.Y({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||I()}));let u=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,ew(c),h]);s.push(i.delete(r)),u.push(e.key)}return en.waitFor(s).next(()=>u)}function ii(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw I();t=e.noDocument}return JSON.stringify(t).length}/**
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
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(41943040,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);class is{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Dn={}}static ct(e,t,n,r){return""!==e.uid||I(),new is(e.isAuthenticated()?e.uid:"",t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return io(e).Y({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=il(e),s=io(e);return s.add({}).next(a=>{"number"==typeof a||I();let o=new nP(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rf(e.ut,t)),i=n.mutations.map(t=>rf(e.ut,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new eW((e,t)=>F(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,ew(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,e_))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Dn[a]=o.keys()}),en.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return io(e).get(t).next(e=>e?(e.userId===this.userId||I(),rC(this.serializer,e)):null)}Cn(e,t){return this.Dn[t]?en.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.Dn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return io(e).Y({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||I(),i=rC(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return io(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return io(e).W("userMutationsIndex",t).next(e=>e.map(e=>rC(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,ew(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return il(e).Y({range:r},(n,r,s)=>{let[a,o,l]=n,u=ev(o);if(a===this.userId&&t.path.isEqual(u))return io(e).get(l).next(e=>{if(!e)throw I();e.userId===this.userId||I(),i.push(rC(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(F),r=[];return t.forEach(t=>{let i=[this.userId,ew(t.path)],s=IDBKeyRange.lowerBound(i),a=il(e).Y({range:s},(e,r,i)=>{let[s,a,o]=e,l=ev(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),en.waitFor(r).next(()=>this.vn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,ew(n)],s=IDBKeyRange.lowerBound(i),a=new eW(F);return il(e).Y({range:s},(e,t,i)=>{let[s,o,l]=e,u=ev(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.vn(e,a))}vn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(io(e).get(t).next(e=>{if(null===e)throw I();e.userId===this.userId||I(),n.push(rC(this.serializer,e))}))}),en.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ir(e.ae,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),en.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return en.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return il(e).Y({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=ev(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||I()})})}containsKey(e,t){return ia(e,this.userId,t)}Mn(e){return iu(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ia(e,t,n){let r=[t,ew(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return il(e).Y({range:s,J:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function io(e){return eB(e,"mutations")}function il(e){return eB(e,"documentMutations")}function iu(e){return eB(e,"mutationQueues")}/**
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
 */class ic{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ic(0)}static Nn(){return new ic(-1)}}/**
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
 */class ih{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{let n=new ic(t.highestTargetId);return t.highestTargetId=n.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(e=>O.fromTimestamp(new P(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Bn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Ln(e,r)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(n=>(n.targetCount+=1,this.qn(t,n),this.Ln(e,n))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>id(e).delete(t.targetId)).next(()=>this.Bn(e)).next(t=>(t.targetCount>0||I(),t.targetCount-=1,this.Ln(e,t)))}removeTargets(e,t,n){let r=0,i=[];return id(e).Y((s,a)=>{let o=rD(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>en.waitFor(i)).next(()=>r)}forEachTarget(e,t){return id(e).Y((e,n)=>{t(rD(n))})}Bn(e){return im(e).get("targetGlobalKey").next(e=>(null!==e||I(),e))}Ln(e,t){return im(e).put("targetGlobalKey",t)}kn(e,t){return id(e).put(rN(this.serializer,t))}qn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Bn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tB(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return id(e).Y({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rD(n);tz(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=ig(e);return t.forEach(t=>{let s=ew(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),en.waitFor(r)}removeMatchingKeys(e,t,n){let r=ig(e);return en.forEach(t,t=>{let i=ew(t.path);return en.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=ig(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ig(e),i=na();return r.Y({range:n,J:!0},(e,t,n)=>{let r=new z(ev(e[1]));i=i.add(r)}).next(()=>i)}containsKey(e,t){let n=ew(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return ig(e).Y({index:"documentTargetsIndex",J:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}_t(e,t){return id(e).get(t).next(e=>e?rD(e):null)}}function id(e){return eB(e,"targets")}function im(e){return eB(e,"targetGlobal")}function ig(e){return eB(e,"targetDocuments")}/**
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
 */function ip([e,t],[n,r]){let i=F(e,n);return 0===i?F(t,r):i}class iy{constructor(e){this.Qn=e,this.buffer=new eW(ip),this.Kn=0}$n(){return++this.Kn}Un(e){let t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ip(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Wn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return null!==this.Wn}Gn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.Gn(3e5)})}}class iv{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(em._e);let n=new iy(t);return this.zn.forEachTarget(e,e=>n.Un(e.sequenceNumber)).next(()=>this.zn.Hn(e,e=>n.Un(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(ie)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ie):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let n,r,i,s,a,o,u;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),g()<=l.LogLevel.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(u-o)+"ms\n"+`Total Duration: ${u-c}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class iI{constructor(e,t){this.db=e,this.garbageCollector=new iv(this,t)}jn(e){let t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Yn(e){let t=0;return this.Hn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(e,n)=>t(n))}addReference(e,t,n){return i_(e,n)}removeReference(e,t,n){return i_(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return i_(e,t)}Xn(e,t){let n;return n=!1,iu(e).Z(r=>ia(e,r,t).next(e=>(e&&(n=!0),en.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Zn(e,(s,a)=>{if(a<=t){let t=this.Xn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,O.min()),ig(e).delete([0,ew(s.path)])))});r.push(t)}}).next(()=>en.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return i_(e,t)}Zn(e,t){let n=ig(e),r,i=em._e;return n.Y({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==em._e&&t(new z(ev(r)),i),i=a,r=s):i=em._e}).next(()=>{i!==em._e&&t(new z(ev(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function i_(e,t){var n;return ig(e).put((n=e.currentSequenceNumber,{targetId:0,path:ew(t.path),sequenceNumber:n}))}/**
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
 */class ib{constructor(){this.changes=new t9(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tw.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?en.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ix(e).put(n)}removeEntry(e,t,n){return ix(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rE(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.er(e,n)))}getEntry(e,t){let n=tw.newInvalidDocument(t);return ix(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(iC(t))},(e,r)=>{n=this.tr(t,r)}).next(()=>n)}nr(e,t){let n={size:0,document:tw.newInvalidDocument(t)};return ix(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(iC(t))},(e,r)=>{n={document:this.tr(t,r),size:ii(r)}}).next(()=>n)}getEntries(e,t){let n=t7;return this.rr(e,t,(e,t)=>{let r=this.tr(e,t);n=n.insert(e,r)}).next(()=>n)}ir(e,t){let n=t7,r=new e$(z.comparator);return this.rr(e,t,(e,t)=>{let i=this.tr(e,t);n=n.insert(e,i),r=r.insert(e,ii(t))}).next(()=>({documents:n,sr:r}))}rr(e,t,n){if(t.isEmpty())return en.resolve();let r=new eW(iN);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iC(r.first()),iC(r.last())),s=r.getIterator(),a=s.getNext();return ix(e).Y({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=z.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>iN(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.U(iC(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),rE(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ix(e).W(IDBKeyRange.bound(a,o,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let n=t7;for(let i of e){let e=this.tr(z.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(t3(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=t7,s=iD(t,n),a=iD(t,J.max());return ix(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.tr(z.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new iE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return iS(e).get("remoteDocumentGlobalKey").next(e=>(e||I(),e))}er(e,t){return iS(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=rd(e.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=z.fromSegments(t.noDocument.path),r=rx(t.noDocument.readTime);n=tw.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return I();{let e=z.fromSegments(t.unknownDocument.path),r=rx(t.unknownDocument.version);n=tw.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new P(e[0],e[1]);return O.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(O.min())))return e}return tw.newInvalidDocument(e)}}class iE extends ib{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new t9(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eW((e,t)=>F(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.ar.get(i);if(t.push(this._r.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rT(this._r.serializer,s);r=r.add(i.path.popLast());let l=ii(o);n+=l-a.size,t.push(this._r.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rT(this._r.serializer,s.convertToNoDocument(O.min()));t.push(this._r.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,n))}),t.push(this._r.updateMetadata(e,n)),en.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(e=>(this.ar.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:e,sr:t})=>(t.forEach((t,n)=>{this.ar.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function iS(e){return eB(e,"remoteDocumentGlobal")}function ix(e){return eB(e,"remoteDocumentsV14")}function iC(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iD(e,t){let n=t.documentKey.path.toArray();return[e,rE(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function iN(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=F(n[e],r[e]))return i;return(i=F(n.length,r.length))||(i=F(n[n.length-2],r[r.length-2]))||F(n[n.length-1],r[r.length-1])}/**
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
 *//**
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
 */class iA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ik{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nC(n.mutation,e,eJ.empty(),P.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,na()).next(()=>t))}getLocalViewOfDocuments(e,t,n=na()){let r=nr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nt();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=nr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,na()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=t7,s=nr(),a=nr();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nA)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nC(a.mutation,t,a.mutation.getFieldMask(),P.now())):s.set(t.key,eJ.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iA(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=nr(),r=new e$((e,t)=>e-t),i=na();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eJ.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||na()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=nr();l.forEach(e=>{if(!i.has(e)){let r=nx(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tH(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(nr()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,na())).next(e=>({batchId:a,changes:nn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(e=>{let t=nt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=nt();return this.indexManager.getCollectionParents(e,i).next(a=>en.forEach(a,a=>{let o=new tj(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tw.newInvalidDocument(r)))});let n=nt();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&nC(s.mutation,r,eJ.empty(),P.now()),t3(t,r)&&(n=n.insert(e,r))}),n})}}/**
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
 */class iM{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return en.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:rn(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:rA(t.bundledQuery),readTime:rn(t.readTime)}),en.resolve()}}/**
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
 */class iR{constructor(){this.overlays=new e$(z.comparator),this.lr=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=nr();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.lt(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=nr(),i=t.length+1,s=new z(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new e$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=nr(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=nr(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}lt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nV(t,n));let i=this.lr.get(t);void 0===i&&(i=na(),this.lr.set(t,i)),this.lr.set(t,i.add(n.key))}}/**
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
 */class iF{constructor(){this.hr=new eW(iL.Pr),this.Ir=new eW(iL.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){let n=new iL(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new iL(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){let t=new z(new q([])),n=new iL(t,e),r=new iL(t,e+1),i=[];return this.Ir.forEachInRange([n,r],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new z(new q([])),n=new iL(t,e),r=new iL(t,e+1),i=na();return this.Ir.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iL(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iL{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return z.comparator(e.key,t.key)||F(e.gr,t.gr)}static Tr(e,t){return F(e.gr,t.gr)||z.comparator(e.key,t.key)}}/**
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
 */class iP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new eW(iL.Pr)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nP(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.yr=this.yr.add(new iL(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Sr(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iL(t,0),r=new iL(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],e=>{let t=this.wr(e.gr);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(F);return t.forEach(e=>{let t=new iL(e,0),r=new iL(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],e=>{n=n.add(e.gr)})}),en.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;z.isDocumentKey(i)||(i=i.child(""));let s=new iL(new z(i),0),a=new eW(F);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.gr)),!0)},s),en.resolve(this.br(a))}br(e){let t=[];return e.forEach(e=>{let n=this.wr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||I(),this.mutationQueue.shift();let n=this.yr;return en.forEach(t.mutations,r=>{let i=new iL(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=n})}Fn(e){}containsKey(e,t){let n=new iL(t,0),r=this.yr.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iO{constructor(e){this.Cr=e,this.docs=new e$(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():tw.newInvalidDocument(t))}getEntries(e,t){let n=t7;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tw.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=t7,s=t.path,a=new z(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=X(H(a),n)||(r.has(a.key)||t3(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){I()}vr(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iV(this)}getSize(e){return en.resolve(this.size)}}class iV extends ib{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
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
 */class iq{constructor(e){this.persistence=e,this.Fr=new t9(e=>tB(e),tz),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Mr=0,this.Or=new iF,this.targetCount=0,this.Nr=ic.On()}forEachTarget(e,t){return this.Fr.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),en.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new ic(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.kn(t),en.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.Fr.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Or.mr(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.Or.containsKey(t))}}/**
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
 */class iU{constructor(e,t){this.Br={},this.overlays={},this.Lr=new em(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new iq(this),this.indexManager=new r1,this.remoteDocumentCache=new iO(e=>this.referenceDelegate.Qr(e)),this.serializer=new rb(t),this.Kr=new iM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new iP(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);let r=new iB(this.Lr.next());return this.referenceDelegate.$r(),n(r).next(e=>this.referenceDelegate.Ur(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Wr(e,t){return en.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class iB extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class iz{constructor(e){this.persistence=e,this.Gr=new iF,this.zr=null}static jr(e){return new iz(e)}get Hr(){if(this.zr)return this.zr;throw I()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),en.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.Hr,n=>{let r=z.fromPath(n);return this.Jr(e,r).next(e=>{e||t.removeEntry(r,O.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return en.or([()=>en.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}class iG{constructor(e,t){this.persistence=e,this.Yr=new t9(e=>ew(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new iv(this,t)}static jr(e,t){return new iG(e,t)}$r(){}Ur(e){return en.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}jn(e){let t=this.Yn(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Yn(e){let t=0;return this.Hn(e,e=>{t++}).next(()=>t)}Hn(e,t){return en.forEach(this.Yr,(n,r)=>this.Xn(e,n,r).next(e=>e?en.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.vr(e,r=>this.Xn(e,r,t).next(e=>{e||(n++,i.removeEntry(r,O.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Yr.set(t,e.currentSequenceNumber),en.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Yr.set(n,e.currentSequenceNumber),en.resolve()}removeReference(e,t,n){return this.Yr.set(n,e.currentSequenceNumber),en.resolve()}updateLimboDocument(e,t){return this.Yr.set(t,e.currentSequenceNumber),en.resolve()}Qr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(tt(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=e3(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return e5(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:var r;let i;return r=t.mapValue,i=0,eG(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw I()}}(e.data.value)),t}Xn(e,t,n){return en.or([()=>this.persistence.Wr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.Yr.get(t);return en.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class iK{constructor(e){this.serializer=e}N(e,t,n,r){let i=new er("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0}),e.createObjectStore("documentMutations"),i$(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=en.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),i$(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:O.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").W().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return en.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Zr(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Xr(i)))),n<7&&r>=7&&(s=s.next(()=>this.ei(i))),n<8&&r>=8&&(s=s.next(()=>this.ti(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ni(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eR});t.createIndex("collectionPathOverlayIndex",eF,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eL,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eb});t.createIndex("documentKeyIndex",eT),t.createIndex("collectionGroupIndex",eE)})(e)).next(()=>this.ri(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.ii(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eN}).createIndex("sequenceNumberIndex",eA,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ek}).createIndex("documentKeyIndex",eM,{unique:!1})})),s}Xr(e){let t=0;return e.store("remoteDocuments").Y((e,n)=>{t+=ii(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Zr(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>en.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>en.forEach(n,n=>{n.userId===t.userId||I();let r=rC(this.serializer,n);return ir(e,t.userId,r).next(()=>{})}))}))}ei(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Y((n,i)=>{let s=new q(n),a=[0,ew(s)];r.push(t.get(a).next(n=>n?en.resolve():t.put({targetId:0,path:ew(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>en.waitFor(r))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:eD});let n=t.store("collectionParents"),r=new r2,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ew(r)})}};return t.store("remoteDocuments").Y({J:!0},(e,t)=>i(new q(e).popLast())).next(()=>t.store("documentMutations").Y({J:!0},([e,t,n],r)=>i(ev(t).popLast())))}ni(e){let t=e.store("targets");return t.Y((e,n)=>{let r=rD(n),i=rN(this.serializer,r);return t.put(i)})}ri(e,t){let n=t.store("remoteDocuments"),r=[];return n.Y((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new z(q.fromString(n.document.name).popFirst(5)):n.noDocument?z.fromSegments(n.noDocument.path):n.unknownDocument?z.fromSegments(n.unknownDocument.path):I()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>en.waitFor(r))}ii(e,t){let n=t.store("mutations"),r=new iT(this.serializer),i=new iU(iz.jr,this.serializer.ut);return n.W().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:na();rC(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),en.forEach(n,(e,n)=>{let s=new d(n),a=rO.ct(this.serializer,s),o=i.getIndexManager(s);return new ik(r,is.ct(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new eU(t,em._e),e).next()})})}}function i$(e){e.createObjectStore("targetDocuments",{keyPath:ex}).createIndex("documentTargetsIndex",eC,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eS,{unique:!0}),e.createObjectStore("targetGlobal")}let iQ="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ij{constructor(e,t,n,r,i,s,a,o,l,u,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.si=i,this.window=s,this.document=a,this.oi=l,this._i=u,this.ai=c,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=e=>Promise.resolve(),!ij.D())throw new b(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iI(this,r),this.Ii=t+"main",this.serializer=new rb(o),this.Ti=new ei(this.Ii,this.ai,new iK(this.serializer)),this.qr=new ih(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new iT(this.serializer),this.Kr=new rF,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,!1===u&&y("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new b(_.FAILED_PRECONDITION,iQ);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new em(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iY(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(eo(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return iW(e).get("owner").next(e=>en.resolve(this.wi(e)))}Si(e){return iY(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eB(e,"clientMetadata");return t.W().next(e=>{let n=this.Ci(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return en.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ei)for(let t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?en.resolve(!0):iW(e).get("owner").next(t=>{if(null!==t&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new b(_.FAILED_PRECONDITION,iQ);return!1}}return!(!this.networkEnabled||!this.inForeground)||iY(e).W().next(e=>void 0===this.Ci(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eU(e,em._e);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter(e=>this.Di(e.updateTimeMs,t)&&!this.Fi(e.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>iY(e).W().next(e=>this.Ci(e,18e5).map(e=>e.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return is.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r4(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return rO.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,n){var r;let i;p("IndexedDbPersistence","Starting transaction:",e);let s=15===(r=this.ai)?eq:14===r?eV:13===r?eV:12===r?eO:11===r?eP:void I();return this.Ti.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new eU(r,this.Lr?this.Lr.next():em._e),"readwrite-primary"===t?this.fi(i).next(e=>!!e||this.gi(i)).next(t=>{if(!t)throw y(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new b(_.FAILED_PRECONDITION,Z);return n(i)}).next(e=>this.yi(i).next(()=>e)):this.Li(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Li(e){return iW(e).get("owner").next(e=>{if(null!==e&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new b(_.FAILED_PRECONDITION,iQ)})}yi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iW(e).put("owner",t)}static D(){return ei.D()}pi(e){let t=iW(e);return t.get("owner").next(e=>this.wi(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):en.resolve())}Di(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(y(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ai(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Mi();let e=/(?:Version|Mobile)\/1[456]/;u.isSafari()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{let n=null!==(null===(t=this.Ei)||void 0===t?void 0:t.getItem(this.vi(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return y("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){y("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch(e){}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iW(e){return eB(e,"owner")}function iY(e){return eB(e,"clientMetadata")}function iH(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
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
 */class iJ{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=r}static Qi(e,t){let n=na(),r=na();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iJ(e,t.fromCache,n,r)}}/**
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
 */class iX{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iZ{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new iX;return this.Hi(e,t,n).next(r=>{if(i.result=r,this.$i)return this.Ji(e,t,n,r.size)})}).next(()=>i.result)}Ji(e,t,n,r){return n.documentReadCount<this.Ui?(g()<=l.LogLevel.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",t4(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),en.resolve()):(g()<=l.LogLevel.DEBUG&&p("QueryEngine","Query:",t4(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(g()<=l.LogLevel.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",t4(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tX(t))):en.resolve())}zi(e,t){if(tY(t))return en.resolve(null);let n=tX(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tX(t=t1(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=na(...r);return this.Gi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Yi(t,r);return this.Zi(t,s,i,n.readTime)?this.zi(e,t1(t,null,"F")):this.Xi(e,s,t,n)}))})))}ji(e,t,n,r){return tY(t)||r.isEqual(O.min())?en.resolve(null):this.Gi.getDocuments(e,n).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,n,r)?en.resolve(null):(g()<=l.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),t4(t)),this.Xi(e,s,t,Y(r,-1)).next(e=>e))})}Yi(e,t){let n=new eW(t6(e));return t.forEach((t,r)=>{t3(e,r)&&(n=n.add(r))}),n}Zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,t,n){return g()<=l.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",t4(t)),this.Gi.getDocumentsMatchingQuery(e,t,J.min(),n)}Xi(e,t,n,r){return this.Gi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class i0{constructor(e,t,n,r){this.persistence=e,this.es=t,this.serializer=r,this.ts=new e$(F),this.ns=new t9(e=>tB(e),tz),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ik(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}async function i1(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.os(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=na();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}function i2(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function i5(e,t,n){let r=na(),i=na();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=t7;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(O.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{us:r,cs:i}})}function i4(e,t){return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.qr.getTargetData(n,t).next(i=>i?(r=i,en.resolve(r)):e.qr.allocateTargetId(n).next(i=>(r=new r_(t,i,"TargetPurposeListen",n.currentSequenceNumber),e.qr.addTargetData(n,r).next(()=>r))))}).then(n=>{let r=e.ts.get(n.targetId);return(null===r||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.ts=e.ts.insert(n.targetId,n),e.ns.set(t,n.targetId)),n})}async function i3(e,t,n){let r=e.ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eo(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ts=e.ts.remove(t),e.ns.delete(r.target)}function i8(e,t,n){let r=O.min(),i=na();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ns.get(n);return void 0!==r?en.resolve(e.ts.get(r)):e.qr.getTargetData(t,n)})(e,s,tX(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,n?r:O.min(),n?i:na())).next(n=>(i7(e,t8(t),n),{documents:n,ls:i})))}function i6(e,t){let n=e.qr,r=e.ts.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n._t(e,t).next(e=>e?e.target:null))}function i9(e,t){let n=e.rs.get(t)||O.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.ss.getAllFromCollectionGroup(r,t,Y(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(i7(e,t,n),n))}function i7(e,t,n){let r=e.rs.get(t)||O.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.rs.set(t,r)}async function se(e,t,n,r){let i=na(),s=t7;for(let e of n){let n=t.hs(e.metadata.name);e.document&&(i=i.add(n));let r=t.Ps(e);r.setReadTime(t.Is(e.metadata.readTime)),s=s.insert(n,r)}let a=e.ss.newChangeBuffer({trackRemovals:!0}),o=await i4(e,tX(tW(q.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i5(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.qr.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.qr.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.us,n.cs)).next(()=>n.us)))}async function st(e,t,n=na()){let r=await i4(e,tX(rA(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=rn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return e.Kr.saveNamedQuery(i,t);let a=r.withResumeToken(eZ.EMPTY_BYTE_STRING,s);return e.ts=e.ts.insert(a.targetId,a),e.qr.updateTargetData(i,a).next(()=>e.qr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>e.qr.addMatchingKeys(i,n,r.targetId)).next(()=>e.Kr.saveNamedQuery(i,t))})}function sn(e,t){return`firestore_clients_${e}_${t}`}function sr(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function si(e,t){return`firestore_targets_${e}_${t}`}class ss{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ts(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new b(r.error.code,r.error.message)),s?new ss(e,t,r.state,i):(y("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Es(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sa{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ts(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new b(n.error.code,n.error.message)),i?new sa(e,n.state,r):(y("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class so{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=no;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=ey(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new so(e,i):(y("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sl{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new sl(t.clientId,t.onlineState):(y("SharedClientState",`Failed to parse online state: ${e}`),null)}}class su{constructor(){this.activeTargetIds=no}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sc{constructor(e,t,n,r,i){var s,a,o;this.window=e,this.si=t,this.persistenceKey=n,this.Rs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new e$(F),this.started=!1,this.ps=[];let l=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ys=sn(this.persistenceKey,this.Rs),this.ws=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.gs=this.gs.insert(this.Rs,new su),this.Ss=RegExp(`^firestore_clients_${l}_([^_]*)$`),this.bs=RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this.Ds=RegExp(`^firestore_targets_${l}_(\\d+)$`),this.Cs=(a=this.persistenceKey,`firestore_online_state_${a}`),this.vs=(o=this.persistenceKey,`firestore_bundle_loaded_v2_${o}`),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){for(let e of(await this.syncEngine.Bi())){if(e===this.Rs)continue;let t=this.getItem(sn(this.persistenceKey,e));if(t){let n=so.Ts(e,t);n&&(this.gs=this.gs.insert(n.clientId,n))}}this.Fs();let e=this.storage.getItem(this.Cs);if(e){let t=this.Ms(e);t&&this.xs(t)}for(let e of this.ps)this.fs(e);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,n){this.Ns(e,t,n),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(si(this.persistenceKey,e));if(n){let r=sa.Ts(e,n);r&&(t=r.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(si(this.persistenceKey,e))}updateQueryState(e,t,n){this.ks(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Bs(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ys)return void y("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Ss.test(e.key)){if(null==e.newValue){let t=this.Ks(e.key);return this.$s(t,null)}{let t=this.Us(e.key,e.newValue);if(t)return this.$s(t.clientId,t)}}else if(this.bs.test(e.key)){if(null!==e.newValue){let t=this.Ws(e.key,e.newValue);if(t)return this.Gs(t)}}else if(this.Ds.test(e.key)){if(null!==e.newValue){let t=this.zs(e.key,e.newValue);if(t)return this.js(t)}}else if(e.key===this.Cs){if(null!==e.newValue){let t=this.Ms(e.newValue);if(t)return this.xs(t)}}else if(e.key===this.ws){let t=function(e){let t=em._e;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||I(),t=n}catch(e){y("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==em._e&&this.sequenceNumberHandler(t)}else if(e.key===this.vs){let t=this.Hs(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Js(e)))}}}else this.ps.push(e)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,n){let r=new ss(this.currentUser,e,t,n),i=sr(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Es())}Bs(e){let t=sr(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){let t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,n){let r=si(this.persistenceKey,e),i=new sa(e,t,n);this.setItem(r,i.Es())}Qs(e){let t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){let t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){let n=this.Ks(e);return so.Ts(n,t)}Ws(e,t){let n=this.bs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ss.Ts(new d(i),r,t)}zs(e,t){let n=Number(this.Ds.exec(e)[1]);return sa.Ts(n,t)}Ms(e){return sl.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);p("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){let n=t?this.gs.insert(e,t):this.gs.remove(e),r=this.Os(this.gs),i=this.Os(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Xs(s,a).then(()=>{this.gs=n})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=no;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class sh{constructor(){this.eo=new su,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new su,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sd{ro(e){}shutdown(){}}/**
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
 */class sf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0)}_o(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let sm=null;function sg(){return null===sm?sm=268435456+Math.round(2147483648*Math.random()):sm++,"0x"+sm.toString(16)}/**
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
 */let sp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sy{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */let sw="WebChannelConnection";class sv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(e,t,n,r,i){let s=sg(),a=this.So(e,t);p("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(o,r,i),this.Do(e,a,o,n).then(t=>(p("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw w("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Co(e,t,n,r,i,s){return this.wo(e,t,n,r,i)}bo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+f}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}So(e,t){let n=sp[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,n,r){let i=sg();return new Promise((s,a)=>{let o=new c.XhrIo;o.setWithCredentials(!0),o.listenOnce(c.EventType.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:let t=o.getResponseJson();p(sw,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case c.ErrorCode.TIMEOUT:p(sw,`RPC '${e}' ${i} timed out`),a(new b(_.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:let n=o.getStatus();if(p(sw,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new b(_.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{p(sw,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);p(sw,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}vo(e,t,n){let i=sg(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=c.createWebChannelTransport(),o=c.getStatEventTarget(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");p(sw,`Creating RPC '${e}' stream ${i}: ${h}`,l);let d=a.createWebChannel(h,l),f=!1,m=!1,g=new sy({co:t=>{m?p(sw,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(p(sw,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),p(sw,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},lo:()=>d.close()}),y=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return y(d,c.WebChannel.EventType.OPEN,()=>{m||p(sw,`RPC '${e}' stream ${i} transport opened.`)}),y(d,c.WebChannel.EventType.CLOSE,()=>{m||(m=!0,p(sw,`RPC '${e}' stream ${i} transport closed`),g.Ro())}),y(d,c.WebChannel.EventType.ERROR,t=>{m||(m=!0,w(sw,`RPC '${e}' stream ${i} transport errored:`,t),g.Ro(new b(_.UNAVAILABLE,"The operation could not be completed")))}),y(d,c.WebChannel.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||I();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){p(sw,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nz(t)}(t),s=a.message;void 0===n&&(n=_.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.Ro(new b(n,s)),d.close()}else p(sw,`RPC '${e}' stream ${i} received:`,s),g.Vo(s)}}),y(o,c.Event.STAT_EVENT,t=>{t.stat===c.Stat.PROXY?p(sw,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===c.Stat.NOPROXY&&p(sw,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}/**
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
 */function sI(){return"undefined"!=typeof window?window:null}function s_(){return"undefined"!=typeof document?document:null}/**
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
 */function sb(e){return new n9(e,!0)}/**
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
 */class sT{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class sE{constructor(e,t,n,r,i,s,a,o){this.si=e,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new sT(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(y(t.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;let e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Uo===t&&this.s_(e,n)},t=>{e(()=>{let e=new b(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)})})}s_(e,t){let n=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{n(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(e=>{n(()=>this.o_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sS extends sE{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:I(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||I(),eZ.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||I(),eZ.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new n0(s,a,o,l&&new b(void 0===l.code?_.UNKNOWN:nz(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=ra(e,r.document.name),s=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):O.min(),o=new ty({mapValue:{fields:r.document.fields}}),l=tw.newFoundDocument(i,s,a,o);n=new nX(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=ra(e,r.document),s=r.readTime?rn(r.readTime):O.min(),a=tw.newNoDocument(i,s);n=new nX([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=ra(e,r.document);n=new nX([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return I();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nU(r,i);n=new nZ(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?rn(t.readTime):O.min()}(e);return this.listener.a_(t,n)}u_(e){let t={};t.database=ru(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tG(r)?{documents:rg(e,r)}:{query:rp(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rt(e,t.resumeToken);let r=n7(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(O.min())>0){n.readTime=re(e,t.snapshotVersion.toTimestamp());let r=n7(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.e_(t)}c_(e){let t={};t.database=ru(this.serializer),t.removeTarget=e,this.e_(t)}}class sx extends sE{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||I(),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||I(),t.map(e=>{let t;return(t=e.updateTime?rn(e.updateTime):rn(n)).isEqual(O.min())&&(t=rn(n)),new nb(t,e.transformResults||[])})):[]),i=rn(e.commitTime);return this.listener.I_(i,r)}return e.writeResults&&0!==e.writeResults.length&&I(),this.l_=!0,this.listener.T_()}E_(){let e={};e.database=ru(this.serializer),this.e_(e)}P_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rf(this.serializer,e))};this.e_(t)}}/**
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
 */class sC extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new b(_.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(_.UNKNOWN,e.toString())})}Co(e,t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(_.UNKNOWN,e.toString())})}terminate(){this.d_=!0}}async function sD(e,t,n){var r;let{request:i,R_:s}=function(e,t,n){let r=rp(e,t),i={},s=[],a=0;return n.forEach(e=>{let t="aggregate_"+a++;i[t]=e.alias,"count"===e.aggregateType?s.push({alias:t,count:{}}):"avg"===e.aggregateType?s.push({alias:t,avg:{field:rw(e.fieldPath)}}):"sum"===e.aggregateType&&s.push({alias:t,sum:{field:rw(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:s,structuredQuery:r.structuredQuery},parent:r.parent},R_:i}}(e.serializer,(t.Pe||(t.Pe=tZ(t,t.explicitOrderBy)),t.Pe),n),a=i.parent;e.connection.yo||delete i.parent;let o=(await e.Co("RunAggregationQuery",a,i,1)).filter(e=>!!e.result);1===o.length||I();let l=null===(r=o[0].result)||void 0===r?void 0:r.aggregateFields;return Object.keys(l).reduce((e,t)=>(e[s[t]]=l[t],e),{})}class sN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(y(t),this.f_=!1):p("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class sA{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(e=>{n.enqueueAndForget(async()=>{sq(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.C_.add(4),await sM(e),e.M_.set("Unknown"),e.C_.delete(4),await sk(e)}(this))})}),this.M_=new sN(n,r)}}async function sk(e){if(sq(e))for(let t of e.v_)await t(!0)}async function sM(e){for(let t of e.v_)await t(!1)}function sR(e,t){e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),sV(e)?sO(e):s0(e).Ho()&&sL(e,t))}function sF(e,t){let n=s0(e);e.D_.delete(t),n.Ho()&&sP(e,t),0===e.D_.size&&(n.Ho()?n.Zo():sq(e)&&e.M_.set("Unknown"))}function sL(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}s0(e).u_(t)}function sP(e,t){e.x_.Oe(t),s0(e).c_(t)}function sO(e){e.x_=new n2({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),s0(e).start(),e.M_.g_()}function sV(e){return sq(e)&&!s0(e).jo()&&e.D_.size>0}function sq(e){return 0===e.C_.size}async function sU(e){e.D_.forEach((t,n)=>{sL(e,t)})}async function sB(e,t){e.x_=void 0,sV(e)?(e.M_.w_(t),sO(e)):e.M_.set("Unknown")}async function sz(e,t,n){if(e.M_.set("Online"),t instanceof n0&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.D_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.D_.delete(r),e.x_.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sG(e,n)}else if(t instanceof nX?e.x_.$e(t):t instanceof nZ?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(O.min()))try{let t=await i2(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.x_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.D_.get(r);i&&e.D_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.D_.get(t);if(!r)return;e.D_.set(t,r.withResumeToken(eZ.EMPTY_BYTE_STRING,r.snapshotVersion)),sP(e,t);let i=new r_(r.target,t,n,r.sequenceNumber);sL(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await sG(e,t)}}async function sG(e,t,n){if(!eo(t))throw t;e.C_.add(1),await sM(e),e.M_.set("Offline"),n||(n=()=>i2(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await sk(e)})}function sK(e,t){return t().catch(n=>sG(e,n,t))}async function s$(e){let t=s1(e),n=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;sq(e)&&e.b_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.b_.length&&t.Zo();break}n=r.batchId,function(e,t){e.b_.push(t);let n=s1(e);n.Ho()&&n.h_&&n.P_(t.mutations)}(e,r)}catch(t){await sG(e,t)}sQ(e)&&sj(e)}function sQ(e){return sq(e)&&!s1(e).jo()&&e.b_.length>0}function sj(e){s1(e).start()}async function sW(e){s1(e).E_()}async function sY(e){let t=s1(e);for(let n of e.b_)t.P_(n.mutations)}async function sH(e,t,n){let r=e.b_.shift(),i=nO.from(r,t,n);await sK(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await s$(e)}async function sJ(e,t){t&&s1(e).h_&&await async function(e,t){var n;if(nB(n=t.code)&&n!==_.ABORTED){let n=e.b_.shift();s1(e).Yo(),await sK(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await s$(e)}}(e,t),sQ(e)&&sj(e)}async function sX(e,t){e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");let n=sq(e);e.C_.add(3),await sM(e),n&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await sk(e)}async function sZ(e,t){t?(e.C_.delete(2),await sk(e)):t||(e.C_.add(2),await sM(e),e.M_.set("Unknown"))}function s0(e){var t,n,r;return e.O_||(e.O_=(t=e.datastore,n=e.asyncQueue,r={ho:sU.bind(null,e),Io:sB.bind(null,e),a_:sz.bind(null,e)},t.A_(),new sS(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.v_.push(async t=>{t?(e.O_.Yo(),sV(e)?sO(e):e.M_.set("Unknown")):(await e.O_.stop(),e.x_=void 0)})),e.O_}function s1(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={ho:sW.bind(null,e),Io:sJ.bind(null,e),T_:sY.bind(null,e),I_:sH.bind(null,e)},t.A_(),new sx(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.v_.push(async t=>{t?(e.N_.Yo(),await s$(e)):(await e.N_.stop(),e.b_.length>0&&(p("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class s2{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new s2(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s5(e,t){if(y("AsyncQueue",`${t}: ${e}`),eo(e))return new b(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class s4{constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(e,t)=>z.comparator(e.key,t.key),this.keyedMap=nt(),this.sortedSet=new e$(this.comparator)}static emptySet(e){return new s4(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s4)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s4;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class s3{constructor(){this.B_=new e$(z.comparator)}track(e){let t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):I():this.B_=this.B_.insert(t,e)}L_(){let e=[];return this.B_.inorderTraversal((t,n)=>{e.push(n)}),e}}class s8{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s8(e,t,s4.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t2(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class s6{constructor(){this.k_=void 0,this.listeners=[]}}class s9{constructor(){this.queries=new t9(e=>t5(e),t2),this.onlineState="Unknown",this.q_=new Set}}async function s7(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new s6),r)try{i.k_=await e.onListen(n)}catch(n){let e=s5(n,`Initialization of query '${t4(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Q_(e.onlineState),i.k_&&t.K_(i.k_)&&ar(e)}async function ae(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function at(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.K_(r)&&(n=!0);i.k_=r}}n&&ar(e)}function an(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function ar(e){e.q_.forEach(e=>{e.next()})}class ai{constructor(e,t,n){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s8(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){return!e.fromCache||(!this.options.J_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;let t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=s8.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class as{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}/**
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
 */class aa{constructor(e){this.serializer=e}hs(e){return ra(this.serializer,e)}Ps(e){return e.metadata.exists?rd(this.serializer,e.document,!1):tw.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return rn(e)}}class ao{constructor(e,t,n){this.X_=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=al(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;let n=q.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){let t=new Map,n=new aa(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.hs(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||na()).add(e);t.set(n,r)}}return t}async complete(){let e=await se(this.localStore,new aa(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(let e of this.queries)await st(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function al(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
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
 */class au{constructor(e){this.key=e}}class ac{constructor(e){this.key=e}}class ah{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=na(),this.mutatedKeys=na(),this._a=t6(e),this.aa=new s4(this._a)}get ua(){return this.ia}ca(e,t){let n=t?t.la:new s3,r=t?t.aa:this.aa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t3(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ha(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this._a(c,o)>0||l&&0>this._a(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{aa:s,la:n,Zi:a,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;let s=e.la.L_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return n(e)-n(t)})(e.type,t.type)||this._a(e.doc,t.doc)),this.Pa(n),r=null!=r&&r;let a=t&&!r?this.Ia():[],o=0===this.oa.size&&this.current&&!r?1:0,l=o!==this.sa;return(this.sa=o,0!==s.length||l)?{snapshot:new s8(this.query,e.aa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new s3,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=e.current)}Ia(){if(!this.current)return[];let e=this.oa;this.oa=na(),this.aa.forEach(e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))});let t=[];return e.forEach(e=>{this.oa.has(e)||t.push(new ac(e))}),this.oa.forEach(n=>{e.has(n)||t.push(new au(n))}),t}da(e){this.ia=e.ls,this.oa=na();let t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return s8.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class ad{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class af{constructor(e){this.key=e,this.Ra=!1}}class am{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new t9(e=>t5(e),t2),this.fa=new Map,this.ga=new Set,this.pa=new e$(z.comparator),this.ya=new Map,this.wa=new iF,this.Sa={},this.ba=new Map,this.Da=ic.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ag(e,t){let n,r;let i=aG(e),s=i.ma.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.Aa();else{let e=await i4(i.localStore,tX(t)),s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await ap(i,t,n,"current"===s,e.resumeToken),i.isPrimaryClient&&sR(i.remoteStore,e)}return r}async function ap(e,t,n,r,i){e.va=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ca(n);i.Zi&&(i=await i8(e.localStore,t.query,!1).then(({documents:e})=>t.view.ca(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return aN(e,t.targetId,o.Ta),o.snapshot})(e,t,n,r);let s=await i8(e.localStore,t,!0),a=new ah(t,s.ls),o=a.ca(s.documents),l=nJ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aN(e,n,u.Ta);let c=new ad(t,n,a);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function ay(e,t){let n=e.ma.get(t),r=e.fa.get(n.targetId);if(r.length>1)return e.fa.set(n.targetId,r.filter(e=>!t2(e,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await i3(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),sF(e.remoteStore,n.targetId),aC(e,n.targetId)}).catch(et)):(aC(e,n.targetId),await i3(e.localStore,n.targetId,!0))}async function aw(e,t,n){let r=aK(e);try{var i;let e;let s=await function(e,t){let n,r;let i=P.now(),s=t.reduce((e,t)=>e.add(t.key),na());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=t7,l=na();return e.ss.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nd(r.transform,e||null);null!=i&&(null===n&&(n=ty.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nA(e.key,t,function e(t){let n=[];return eG(t.fields,(t,r)=>{let i=new B([t]);if(td(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eJ(n)}(t.value.mapValue),nT.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:nn(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.Sa[r.currentUser.toKey()])||(e=new e$(F)),e=e.insert(i,n),r.Sa[r.currentUser.toKey()]=e,await ak(r,s.changes),await s$(r.remoteStore)}catch(t){let e=s5(t,"Failed to persist write");n.reject(e)}}async function av(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.ss.newChangeBuffer({trackRemovals:!0});r=e.ts;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=r.get(o);if(!u)return;a.push(e.qr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.qr.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(eZ.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.qr.updateTargetData(i,c))});let o=t7,l=na();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),a.push(i5(i,s,t.documentUpdates).next(e=>{o=e.us,l=e.cs})),!n.isEqual(O.min())){let t=e.qr.getLastRemoteSnapshotVersion(i).next(t=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(t)}return en.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.ts=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.ya.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||I(),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?r.Ra||I():t.removedDocuments.size>0&&(r.Ra||I(),r.Ra=!1))}),await ak(e,n,t)}catch(e){await et(e)}}function aI(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ma.forEach((e,n)=>{let r=n.view.Q_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Q_(t)&&(n=!0)}),n&&ar(r),i.length&&e.Va.a_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function a_(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.ya.get(t),i=r&&r.key;if(i){let n=new e$(z.comparator);n=n.insert(i,tw.newNoDocument(i,O.min()));let r=na().add(i),s=new nH(O.min(),new Map,new e$(F),n,r);await av(e,s),e.pa=e.pa.remove(i),e.ya.delete(t),aA(e)}else await i3(e.localStore,t,!1).then(()=>aC(e,t,n)).catch(et)}async function ab(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||I(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=na();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ax(e,r,null),aS(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ak(e,i)}catch(e){await et(e)}}async function aT(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||I(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ax(e,t,n),aS(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await ak(e,i)}catch(e){await et(e)}}async function aE(e,t){var n;sq(e.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.ba.get(r)||[];i.push(t),e.ba.set(r,i)}catch(n){let e=s5(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aS(e,t){(e.ba.get(t)||[]).forEach(e=>{e.resolve()}),e.ba.delete(t)}function ax(e,t,n){let r=e.Sa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Sa[e.currentUser.toKey()]=r}}function aC(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.fa.get(t)))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(t=>{e.wa.containsKey(t)||aD(e,t)})}function aD(e,t){e.ga.delete(t.path.canonicalString());let n=e.pa.get(t);null!==n&&(sF(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),aA(e))}function aN(e,t,n){for(let r of n)r instanceof au?(e.wa.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(p("SyncEngine","New document in limbo: "+n),e.ga.add(r),aA(e))}(e,r)):r instanceof ac?(p("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||aD(e,r.key)):I()}function aA(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){let t=e.ga.values().next().value;e.ga.delete(t);let n=new z(q.fromString(t)),r=e.Da.next();e.ya.set(r,new af(n)),e.pa=e.pa.insert(n,r),sR(e.remoteStore,new r_(tX(tW(n.path)),r,"TargetPurposeLimboResolution",em._e))}}async function ak(e,t,n){let r=[],i=[],s=[];e.ma.isEmpty()||(e.ma.forEach((a,o)=>{s.push(e.va(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iJ.Qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Va.a_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>en.forEach(t,t=>en.forEach(t.ki,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>en.forEach(t.qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eo(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ts=e.ts.insert(t,i)}}}(e.localStore,i))}async function aM(e,t){if(!e.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());let n=await i1(e.localStore,t);e.currentUser=t,e.ba.forEach(e=>{e.forEach(e=>{e.reject(new b(_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ba.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ak(e,n._s)}}function aR(e,t){let n=e.ya.get(t);if(n&&n.Ra)return na().add(n.key);{let n=na(),r=e.fa.get(t);if(!r)return n;for(let t of r){let r=e.ma.get(t);n=n.unionWith(r.view.ua)}return n}}async function aF(e,t){let n=await i8(e.localStore,t.query,!0),r=t.view.da(n);return e.isPrimaryClient&&aN(e,t.targetId,r.Ta),r}async function aL(e,t){return i9(e.localStore,t).then(t=>ak(e,t))}async function aP(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Cn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):en.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await s$(e.remoteStore):"acknowledged"===n||"rejected"===n?(ax(e,t,r||null),aS(e,t),function(e,t){e.mutationQueue.Fn(t)}(e.localStore,t)):I(),await ak(e,i)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aO(e,t){if(aG(e),aK(e),!0===t&&!0!==e.Ca){let t=e.sharedClientState.getAllActiveQueryTargets(),n=await aV(e,t.toArray());for(let t of(e.Ca=!0,await sZ(e.remoteStore,!0),n))sR(e.remoteStore,t)}else if(!1===t&&!1!==e.Ca){let t=[],n=Promise.resolve();e.fa.forEach((r,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):n=n.then(()=>(aC(e,i),i3(e.localStore,i,!0))),sF(e.remoteStore,i)}),await n,await aV(e,t),e.ya.forEach((t,n)=>{sF(e.remoteStore,n)}),e.wa.Vr(),e.ya=new Map,e.pa=new e$(z.comparator),e.Ca=!1,await sZ(e.remoteStore,!1)}}async function aV(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.fa.get(n);if(s&&0!==s.length)for(let n of(t=await i4(e.localStore,tX(s[0])),s)){let t=e.ma.get(n),r=await aF(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await i6(e.localStore,n);t=await i4(e.localStore,r),await ap(e,aq(r),n,!1,t.resumeToken)}r.push(t)}return e.Va.a_(i),r}function aq(e){var t,n,r,i;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,new tj(t,n,r,i,e.limit,"F",e.startAt,e.endAt)}function aU(e){return e.localStore.persistence.Bi()}async function aB(e,t,n,r){if(e.Ca)return void p("SyncEngine","Ignoring unexpected query state notification.");let i=e.fa.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await i9(e.localStore,t8(i[0])),s=nH.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,eZ.EMPTY_BYTE_STRING);await ak(e,r,s);break}case"rejected":await i3(e.localStore,t,!0),aC(e,t,r);break;default:I()}}async function az(e,t,n){let r=aG(e);if(r.Ca){for(let e of t){if(r.fa.has(e)){p("SyncEngine","Adding an already active target "+e);continue}let t=await i6(r.localStore,e),n=await i4(r.localStore,t);await ap(r,aq(t),n.targetId,!1,n.resumeToken),sR(r.remoteStore,n)}for(let e of n)r.fa.has(e)&&await i3(r.localStore,e,!1).then(()=>{sF(r.remoteStore,e),aC(r,e)}).catch(et)}}function aG(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=av.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a_.bind(null,e),e.Va.a_=at.bind(null,e.eventManager),e.Va.Fa=an.bind(null,e.eventManager),e}function aK(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aT.bind(null,e),e}class a${constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sb(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new i0(t,new iZ,e.initialUser,this.serializer)}createPersistence(e){return new iU(iz.jr,this.serializer)}createSharedClientState(e){return new sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aQ extends a${constructor(e){super(),this.cacheSizeBytes=e}createGarbageCollectionScheduler(e,t){return this.persistence.referenceDelegate instanceof iG||I(),new iw(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}createPersistence(e){let t=void 0!==this.cacheSizeBytes?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new iU(e=>iG.jr(e,t),this.serializer)}}class aj extends a${constructor(e,t,n){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await aK(this.xa.syncEngine),await s$(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t;return t=this.persistence,new i0(t,new iZ,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){return new iw(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ef(t,this.persistence);return new ed(e.asyncQueue,n)}createPersistence(e){let t=iH(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new ij(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sI(),s_(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sh}}class aW extends aj{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.xa.syncEngine;this.sharedClientState instanceof sc&&(this.sharedClientState.syncEngine={Ys:aP.bind(null,t),Zs:aB.bind(null,t),Xs:az.bind(null,t),Bi:aU.bind(null,t),Js:aL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async e=>{await aO(this.xa.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=sI();if(!sc.D(t))throw new b(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iH(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class aY{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aI(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aM.bind(null,this.syncEngine),await sZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s9}createDatastore(e){let t=sb(e.databaseInfo.databaseId),n=new sv(e.databaseInfo);return new sC(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new sA(t,this.datastore,e.asyncQueue,e=>aI(this.syncEngine,e,0),sf.D()?new sf:new sd)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new am(e,t,n,r,i,s);return a&&(o.Ca=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){p("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await sM(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */function aH(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class aJ{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):y("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aX{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new T,this.buffer=new Uint8Array,this.La=new TextDecoder("utf-8"),this.ka().then(e=>{e&&e.Z_()?this.metadata.resolve(e.Y_.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Y_)}`))},e=>this.metadata.reject(e))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){let e=await this.qa();if(null===e)return null;let t=this.La.decode(e),n=Number(t);return isNaN(n)&&this.Qa(`length string (${t}) is not valid number`),new as(JSON.parse(await this.Ka(n)),e.length+n)}$a(){return this.buffer.findIndex(e=>123===e)}async qa(){for(;0>this.$a()&&!await this.Ua(););if(0===this.buffer.length)return null;let e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");let t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),Error(`Invalid bundle format: ${e}`)}async Ua(){let e=await this.Ba.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class aZ{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new b(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=ru(e.serializer)+"/documents",r={documents:t.map(t=>rs(e.serializer,t))},i=await e.Co("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||I(),t.found.name,t.found.updateTime;let n=ra(e,t.found.name),r=rn(t.found.updateTime),i=t.found.createTime?rn(t.found.createTime):O.min(),s=new ty({mapValue:{fields:t.found.fields}});return tw.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||I(),t.readTime||I();let n=ra(e,t.missing),r=rn(t.readTime);return tw.newNoDocument(n,r)}(n,t):I());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||I(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nF(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=z.fromPath(t);this.mutations.push(new nL(n,this.precondition(n)))}),await async function(e,t){let n=ru(e.serializer)+"/documents",r={writes:t.map(t=>rf(e.serializer,t))};await e.wo("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw I();t=O.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new b(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(O.min())?nT.exists(!1):nT.updateTime(t):nT.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(O.min()))throw new b(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nT.updateTime(t)}return nT.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class a0{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Wa=n.maxAttempts,this.zo=new sT(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{let e=new aZ(this.datastore),t=this.za(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.ja(e)}))}).catch(e=>{this.ja(e)})})}za(e){try{let t=this.updateFunction(e);return!eg(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nB(t)}return!1}}/**
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
 */class a1{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=R.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s5(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a2(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i1(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function a5(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a3(e);p("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sX(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sX(t.remoteStore,n)),e._onlineComponents=t}function a4(e){return"FirebaseError"===e.name?e.code===_.FAILED_PRECONDITION||e.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function a3(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await a2(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!a4(t))throw t;w("Error using user provided cache. Falling back to memory cache: "+t),await a2(e,new a$)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await a2(e,new a$)}return e._offlineComponents}async function a8(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await a5(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await a5(e,new aY))),e._onlineComponents}function a6(e){return a3(e).then(e=>e.persistence)}function a9(e){return a3(e).then(e=>e.localStore)}function a7(e){return a8(e).then(e=>e.remoteStore)}function oe(e){return a8(e).then(e=>e.syncEngine)}function ot(e){return a8(e).then(e=>e.datastore)}async function on(e){let t=await a8(e),n=t.eventManager;return n.onListen=ag.bind(null,t.syncEngine),n.onUnlisten=ay.bind(null,t.syncEngine),n}function or(e,t,n={}){let r=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aJ({next:s=>{t.enqueueAndForget(()=>ae(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new b(_.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new b(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ai(tW(n.path),s,{includeMetadataChanges:!0,J_:!0});return s7(e,a)})(await on(e),e.asyncQueue,t,n,r)),r.promise}function oi(e,t,n={}){let r=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ai(n,new aJ({next:n=>{t.enqueueAndForget(()=>ae(e,s)),n.fromCache&&"server"===r.source?i.reject(new b(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,J_:!0});return s7(e,s)})(await on(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function os(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let oa=new Map;/**
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
 */function oo(e,t,n){if(!n)throw new b(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ol(e,t,n,r){if(!0===t&&!0===r)throw new b(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ou(e){if(!z.isDocumentKey(e))throw new b(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oc(e){if(z.isDocumentKey(e))throw new b(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":I()}function od(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oh(e);throw new b(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function of(e,t){if(t<=0)throw new b(_.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class om{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new b(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ol("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=os(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new b(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new b(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class og{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new om({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new om(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"firstParty":return new N(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oa.get(e);t&&(p("ComponentProvider","Removing Datastore"),oa.delete(e),t.terminate())}(this),Promise.resolve()}}function op(e,t,n,r={}){var i;let s=(e=od(e,og))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&w("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=u.createMockUserToken(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new b(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new x(new E(t,n))}}/**
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
 */class oy{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oy(this.firestore,e,this._query)}}class ow{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ov(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ow(this.firestore,e,this._key)}}class ov extends oy{constructor(e,t,n){super(e,t,tW(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ow(this.firestore,null,new z(e))}withConverter(e){return new ov(this.firestore,e,this._path)}}function oI(e,t,...n){if(e=u.getModularInstance(e),1==arguments.length&&(t=R.newId()),oo("doc","path",t),e instanceof og){let r=q.fromString(t,...n);return ou(r),new ow(e,null,new z(r))}{if(!(e instanceof ow||e instanceof ov))throw new b(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(q.fromString(t,...n));return ou(r),new ow(e.firestore,e instanceof ov?e.converter:null,new z(r))}}function o_(e,t){return e=u.getModularInstance(e),t=u.getModularInstance(t),e instanceof oy&&t instanceof oy&&e.firestore===t.firestore&&t2(e._query,t._query)&&e.converter===t.converter}/**
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
 */class ob{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new sT(this,"async_queue_retry"),this.iu=()=>{let e=s_();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=s_();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=s_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new T;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!eo(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;throw this.eu=e,this.tu=!1,y("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,n){this.su(),this.ru.indexOf(e)>-1&&(t=0);let r=s2.createAndSchedule(this,e,t,n,e=>this.au(e));return this.Xa.push(r),r}su(){this.eu&&I()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function oT(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oE{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}class oS extends og{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ob,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oC(this),this._firestoreClient.terminate()}}function ox(e){return e._firestoreClient||oC(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oC(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new e6(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,os(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new a1(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function oD(e,t,n){let r=new T;return e.asyncQueue.enqueue(async()=>{try{await a2(e,n),await a5(e,t),r.resolve()}catch(e){if(!a4(e))throw e;w("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function oN(e){if(e._initialized||e._terminated)throw new b(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class oA{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class ok{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class oM{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oM(eZ.fromBase64String(e))}catch(e){throw new b(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oM(eZ.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oR{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oF{constructor(e){this._methodName=e}}/**
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
 */class oL{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
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
 */let oP=/^__.*__$/;class oO{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nA(e,this.data,this.fieldMask,t,this.fieldTransforms):new nN(e,this.data,t,this.fieldTransforms)}}class oV{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nA(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oq(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class oU{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new oU(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Au(e),r}Ru(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return o8(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(oq(this.Iu)&&oP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class oB{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sb(e)}pu(e,t,n,r=!1){return new oU({Iu:e,methodName:t,gu:n,path:B.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oz(e){let t=e._freezeSettings(),n=sb(e._databaseId);return new oB(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oG(e,t,n,r,i,s={}){let a,o;let l=e.pu(s.merge||s.mergeFields?2:0,t,n,i);o2("Data must be an object, but it was:",l,r);let u=o0(r,l);if(s.merge)a=new eJ(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=o5(t,r,n);if(!l.contains(i))throw new b(_.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);o6(e,i)||e.push(i)}a=new eJ(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new oO(new ty(u),a,o)}class oK extends oF{_toFieldTransform(e){if(2!==e.Iu)throw 1===e.Iu?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oK}}function o$(e,t,n){return new oU({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class oQ extends oF{_toFieldTransform(e){return new n_(e.path,new nf)}isEqual(e){return e instanceof oQ}}class oj extends oF{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){let t=o$(this,e,!0),n=new nm(this.yu.map(e=>oZ(e,t)));return new n_(e.path,n)}isEqual(e){return this===e}}class oW extends oF{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){let t=o$(this,e,!0),n=new np(this.yu.map(e=>oZ(e,t)));return new n_(e.path,n)}isEqual(e){return this===e}}class oY extends oF{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){let t=new nw(e.serializer,nc(e.serializer,this.wu));return new n_(e.path,t)}isEqual(e){return this===e}}function oH(e,t,n,r){let i=e.pu(1,t,n);o2("Data must be an object, but it was:",i,r);let s=[],a=ty.empty();return eG(r,(e,r)=>{let o=o3(t,e,n);r=u.getModularInstance(r);let l=i.Ru(o);if(r instanceof oK)s.push(o);else{let e=oZ(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new oV(a,new eJ(s),i.fieldTransforms)}function oJ(e,t,n,r,i,s){let a=e.pu(1,t,n),o=[o5(t,r,n)],l=[i];if(s.length%2!=0)throw new b(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(o5(t,s[e])),l.push(s[e+1]);let c=[],h=ty.empty();for(let e=o.length-1;e>=0;--e)if(!o6(c,o[e])){let t=o[e],n=l[e];n=u.getModularInstance(n);let r=a.Ru(t);if(n instanceof oK)c.push(t);else{let e=oZ(n,r);null!=e&&(c.push(t),h.set(t,e))}}return new oV(h,new eJ(c),a.fieldTransforms)}function oX(e,t,n,r=!1){return oZ(n,e.pu(r?4:3,t))}function oZ(e,t){if(o1(e=u.getModularInstance(e)))return o2("Unsupported field value:",t,e),o0(e,t);if(e instanceof oF)return function(e,t){if(!oq(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=oZ(i,t.Vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=u.getModularInstance(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nc(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=P.fromDate(e);return{timestampValue:re(t.serializer,n)}}if(e instanceof P){let n=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:re(t.serializer,n)}}if(e instanceof oL)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oM)return{bytesValue:rt(t.serializer,e._byteString)};if(e instanceof ow){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${oh(e)}`)}(e,t)}function o0(e,t){let n={};return eK(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eG(e,(e,r)=>{let i=oZ(r,t.Eu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function o1(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof oL||e instanceof oM||e instanceof ow||e instanceof oF)}function o2(e,t,n){if(!o1(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=oh(n);throw"an object"===r?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function o5(e,t,n){if((t=u.getModularInstance(t))instanceof oR)return t._internalPath;if("string"==typeof t)return o3(e,t);throw o8("Field path arguments must be of type string or ",e,!1,void 0,n)}let o4=RegExp("[~\\*/\\[\\]]");function o3(e,t,n){if(t.search(o4)>=0)throw o8(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oR(...t.split("."))._internalPath}catch(r){throw o8(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function o8(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new b(_.INVALID_ARGUMENT,o+e+l)}function o6(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class o9{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ow(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new o7(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(le("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class o7 extends o9{data(){return super.data()}}function le(e,t){return"string"==typeof t?o3(e,t):t instanceof oR?t._internalPath:t._delegate._internalPath}/**
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
 */function lt(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new b(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ln{}class lr extends ln{}class li extends lr{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new li(e,t,n)}_apply(e){let t=this._parse(e);return lf(e._query,t),new oy(e.firestore,e.converter,t0(e._query,t))}_parse(e){let t=oz(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new b(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ld(a,s);let t=[];for(let n of a)t.push(lh(r,e,n));o={arrayValue:{values:t}}}else o=lh(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ld(a,s),o=oX(n,t,a,"in"===s||"not-in"===s);return tE.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ls extends ln{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ls(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:tS.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())lf(n,e),n=t0(n,e)}(e._query,t),new oy(e.firestore,e.converter,t0(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class la extends lr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new la(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new b(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new b(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tb(t,n)}(e._query,this._field,this._direction);return new oy(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tj(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class lo extends lr{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new lo(e,t,n)}_apply(e){return new oy(e.firestore,e.converter,t1(e._query,this._limit,this._limitType))}}class ll extends lr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ll(e,t,n)}_apply(e){var t;let n=lc(e,this.type,this._docOrFields,this._inclusive);return new oy(e.firestore,e.converter,new tj((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt))}}class lu extends lr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lu(e,t,n)}_apply(e){var t;let n=lc(e,this.type,this._docOrFields,this._inclusive);return new oy(e.firestore,e.converter,new tj((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n))}}function lc(e,t,n,r){if(n[0]=u.getModularInstance(n[0]),n[0]instanceof o9)return function(e,t,n,r,i){if(!r)throw new b(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of tJ(e))if(n.field.isKeyField())s.push(to(t,r.key));else{let e=r.data.field(n.field);if(e4(e))throw new b(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new b(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tv(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oz(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new b(_.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new b(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!tH(e)&&-1!==l.indexOf("/"))throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(q.fromString(l));if(!z.isDocumentKey(n))throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new z(n);o.push(to(t,i))}else{let e=oX(n,r,l);o.push(e)}}return new tv(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lh(e,t,n){if("string"==typeof(n=u.getModularInstance(n))){if(""===n)throw new b(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tH(t)&&-1!==n.indexOf("/"))throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(q.fromString(n));if(!z.isDocumentKey(r))throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return to(e,new z(r))}if(n instanceof ow)return to(e,n._key);throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function ld(e,t){if(!Array.isArray(e)||0===e.length)throw new b(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lf(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new b(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function lm(e,t){if(!(t instanceof li||t instanceof ls))throw new b(_.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class lg{convertValue(e,t="none"){switch(tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(e5(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw I()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eG(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oL(e2(e.latitude),e2(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e3(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e8(e));default:return null}}convertTimestamp(e){let t=e1(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=q.fromString(e);rI(n)||I();let r=new e9(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||y(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function lp(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class ly extends lg{constructor(e){super(),this.firestore=e}convertBytes(e){return new oM(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ow(this.firestore,null,t)}}function lw(){return new oA("count")}/**
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
 */class lv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lI extends o9{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new l_(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(le("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class l_ extends lI{data(e={}){return super.data(e)}}class lb{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lv(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new l_(this._firestore,this._userDataWriter,n.key,n,new lv(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new b(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new l_(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lv(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new l_(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lv(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class lT extends lg{constructor(e){super(),this.firestore=e}convertBytes(e){return new oM(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ow(this.firestore,null,t)}}function lE(e,t){return function(e,t){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>aw(await oe(e),t,n)),n.promise}(ox(e),t)}function lS(e,t,n){let r=n.docs.get(t._key),i=new lT(e);return new lI(e,i,t._key,r,new lv(n.hasPendingWrites,n.fromCache),t.converter)}function lx(e,t){let n=od(e.firestore,oS),r=ox(n),i=function(e,t){let n=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e));return n}(t,(e,t)=>new nq(t,e.aggregateType,e._internalFieldPath));return(function(e,t,n){let r=new T;return e.asyncQueue.enqueueAndForget(async()=>{try{let i=await ot(e);r.resolve(sD(i,t,n))}catch(e){r.reject(e)}}),r.promise})(r,e._query,i).then(t=>new ok(e,new lT(n),t))}class lC{constructor(e){this.kind="memory",this._onlineComponentProvider=new aY,(null==e?void 0:e.garbageCollector)?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new a$}toJSON(){return{kind:this.kind}}}class lD{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=lR(void 0))._initialize(e),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class lN{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new a$}toJSON(){return{kind:this.kind}}}class lA{constructor(e){this.kind="memoryLru",this._offlineComponentProvider=new aQ(e)}toJSON(){return{kind:this.kind}}}class lk{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new aY,this._offlineComponentProvider=new aj(this._onlineComponentProvider,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}class lM{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new aY,this._offlineComponentProvider=new aW(this._onlineComponentProvider,null==e?void 0:e.cacheSizeBytes)}}function lR(e){return new lk(null==e?void 0:e.forceOwnership)}/**
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
 */let lF={maxAttempts:5};/**
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
 */class lL{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oz(e)}set(e,t,n){this._verifyNotCommitted();let r=lP(e,this._firestore),i=lp(r.converter,t,n),s=oG(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nT.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=lP(e,this._firestore);return i="string"==typeof(t=u.getModularInstance(t))||t instanceof oR?oJ(this._dataReader,"WriteBatch.update",s._key,t,n,r):oH(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nT.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=lP(e,this._firestore);return this._mutations=this._mutations.concat(new nF(t._key,nT.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lP(e,t){if((e=u.getModularInstance(e)).firestore!==t)throw new b(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */class lO extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oz(e)}get(e){let t=lP(e,this._firestore),n=new ly(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return I();let r=e[0];if(r.isFoundDocument())return new o9(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new o9(this._firestore,n,t._key,null,t.converter);throw I()})}set(e,t,n){let r=lP(e,this._firestore),i=lp(r.converter,t,n),s=oG(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=lP(e,this._firestore);return i="string"==typeof(t=u.getModularInstance(t))||t instanceof oR?oJ(this._dataReader,"Transaction.update",s._key,t,n,r):oH(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=lP(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=lP(e,this._firestore),n=new lT(this._firestore);return super.get(e).then(e=>new lI(this._firestore,n,t._key,e._document,new lv(!1,!1),t.converter))}}function lV(e,t){if("string"!=typeof e[t])throw new b(_.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}/**
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
 */class lq{constructor(e){this._client=e,this.type="PersistentCacheIndexManager"}}function lU(e,t){var n;e._client.verifyNotTerminated(),(n=e._client).asyncQueue.enqueue(async()=>{(await a9(n)).es.$i=t}).then(e=>p(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>w(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}let lB=new WeakMap;/**
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
 */class lz{constructor(){throw Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return lG.instance.onExistenceFilterMismatch(e)}}class lG{constructor(){this.Su=new Map}static get instance(){return lK||function(e){if(nG)throw Error("a TestingHooksSpi instance is already set");nG=e}(lK=new lG),lK}tt(e){this.Su.forEach(t=>t(e))}onExistenceFilterMismatch(e){let t=Symbol(),n=this.Su;return n.set(t,e),()=>n.delete(t)}}let lK=null;!function(e=!0){f=a.SDK_VERSION,a._registerComponent(new o.Component("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new oS(new C(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e9(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),a.registerVersion(h,"4.4.0",void 0),a.registerVersion(h,"4.4.0","cjs2017")}(),t.AbstractUserDataWriter=lg,t.AggregateField=oA,t.AggregateQuerySnapshot=ok,t.Bytes=oM,t.CACHE_SIZE_UNLIMITED=-1,t.CollectionReference=ov,t.DocumentReference=ow,t.DocumentSnapshot=lI,t.FieldPath=oR,t.FieldValue=oF,t.Firestore=oS,t.FirestoreError=b,t.GeoPoint=oL,t.LoadBundleTask=oE,t.PersistentCacheIndexManager=lq,t.Query=oy,t.QueryCompositeFilterConstraint=ls,t.QueryConstraint=lr,t.QueryDocumentSnapshot=l_,t.QueryEndAtConstraint=lu,t.QueryFieldFilterConstraint=li,t.QueryLimitConstraint=lo,t.QueryOrderByConstraint=la,t.QuerySnapshot=lb,t.QueryStartAtConstraint=ll,t.SnapshotMetadata=lv,t.Timestamp=P,t.Transaction=lO,t.WriteBatch=lL,t._AutoId=R,t._ByteString=eZ,t._DatabaseId=e9,t._DocumentKey=z,t._EmptyAppCheckTokenProvider=M,t._EmptyAuthCredentialsProvider=S,t._FieldPath=B,t._TestingHooks=lz,t._cast=od,t._debugAssert=function(e,t){e||I()},t._isBase64Available=/**
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
 */function(){return"undefined"!=typeof atob},t._logWarn=w,t._validateIsNotUsedTogether=ol,t.addDoc=function(e,t){let n=od(e.firestore,oS),r=oI(e),i=lp(e.converter,t);return lE(n,[oG(oz(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nT.exists(!1))]).then(()=>r)},t.aggregateFieldEqual=function(e,t){var n,r;return e instanceof oA&&t instanceof oA&&e.aggregateType===t.aggregateType&&(null===(n=e._internalFieldPath)||void 0===n?void 0:n.canonicalString())===(null===(r=t._internalFieldPath)||void 0===r?void 0:r.canonicalString())},t.aggregateQuerySnapshotEqual=function(e,t){return o_(e.query,t.query)&&u.deepEqual(e.data(),t.data())},t.and=function(...e){return e.forEach(e=>lm("and",e)),ls._create("and",e)},t.arrayRemove=function(...e){return new oW("arrayRemove",e)},t.arrayUnion=function(...e){return new oj("arrayUnion",e)},t.average=function(e){return new oA("avg",o5("average",e))},t.clearIndexedDbPersistence=function(e){if(e._initialized&&!e._terminated)throw new b(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ei.D())return Promise.resolve();await ei.delete(e+"main")}(iH(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise},t.collection=function(e,t,...n){if(e=u.getModularInstance(e),oo("collection","path",t),e instanceof og){let r=q.fromString(t,...n);return oc(r),new ov(e,null,r)}{if(!(e instanceof ow||e instanceof ov))throw new b(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(q.fromString(t,...n));return oc(r),new ov(e.firestore,null,r)}},t.collectionGroup=function(e,t){if(e=od(e,og),oo("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new b(_.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new oy(e,null,new tj(q.emptyPath(),t))},t.connectFirestoreEmulator=op,t.count=lw,t.deleteAllPersistentCacheIndexes=function(e){var t;e._client.verifyNotTerminated(),(t=e._client).asyncQueue.enqueue(async()=>(function(e){let t=e.indexManager;return e.persistence.runTransaction("Delete All Indexes","readwrite",e=>t.deleteAllFieldIndexes(e))})(await a9(t))).then(e=>p("deleting all persistent cache indexes succeeded")).catch(e=>w("deleting all persistent cache indexes failed",e))},t.deleteDoc=function(e){return lE(od(e.firestore,oS),[new nF(e._key,nT.none())])},t.deleteField=/**
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
 */function(){return new oK("deleteField")},t.disableNetwork=function(e){var t;return(t=ox(e=od(e,oS))).asyncQueue.enqueue(async()=>{let e=await a6(t),n=await a7(t);return e.setNetworkEnabled(!1),async function(e){e.C_.add(0),await sM(e),e.M_.set("Offline")}(n)})},t.disablePersistentCacheIndexAutoCreation=function(e){lU(e,!1)},t.doc=oI,t.documentId=function(){return new oR("__name__")},t.enableIndexedDbPersistence=function(e,t){oN(e=od(e,oS));let n=ox(e);if(n._uninitializedComponentsProvider)throw new b(_.FAILED_PRECONDITION,"SDK cache is already specified.");w("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new aY;return oD(n,i,new aj(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))},t.enableMultiTabIndexedDbPersistence=function(e){oN(e=od(e,oS));let t=ox(e);if(t._uninitializedComponentsProvider)throw new b(_.FAILED_PRECONDITION,"SDK cache is already specified.");w("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new aY;return oD(t,r,new aW(r,n.cacheSizeBytes))},t.enableNetwork=function(e){var t;return(t=ox(e=od(e,oS))).asyncQueue.enqueue(async()=>{let e=await a6(t),n=await a7(t);return e.setNetworkEnabled(!0),n.C_.delete(0),sk(n)})},t.enablePersistentCacheIndexAutoCreation=function(e){lU(e,!0)},t.endAt=function(...e){return lu._create("endAt",e,!0)},t.endBefore=function(...e){return lu._create("endBefore",e,!1)},t.ensureFirestoreConfigured=ox,t.executeWrite=lE,t.getAggregateFromServer=lx,t.getCountFromServer=/**
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
 */function(e){return lx(e,{count:lw()})},t.getDoc=/**
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
 */function(e){e=od(e,ow);let t=od(e.firestore,oS);return or(ox(t),e._key).then(n=>lS(t,e,n))},t.getDocFromCache=function(e){e=od(e,ow);let t=od(e.firestore,oS),n=ox(t),r=new lT(t);return(function(e,t){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new b(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s5(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await a9(e),t,n)),n.promise})(n,e._key).then(n=>new lI(t,r,e._key,n,new lv(null!==n&&n.hasLocalMutations,!0),e.converter))},t.getDocFromServer=function(e){e=od(e,ow);let t=od(e.firestore,oS);return or(ox(t),e._key,{source:"server"}).then(n=>lS(t,e,n))},t.getDocs=function(e){e=od(e,oy);let t=od(e.firestore,oS),n=ox(t),r=new lT(t);return lt(e._query),oi(n,e._query).then(n=>new lb(t,r,e,n))},t.getDocsFromCache=function(e){e=od(e,oy);let t=od(e.firestore,oS),n=ox(t),r=new lT(t);return(function(e,t){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await i8(e,t,!0),i=new ah(t,r.ls),s=i.ca(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s5(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await a9(e),t,n)),n.promise})(n,e._query).then(n=>new lb(t,r,e,n))},t.getDocsFromServer=function(e){e=od(e,oy);let t=od(e.firestore,oS),n=ox(t),r=new lT(t);return oi(n,e._query,{source:"server"}).then(n=>new lb(t,r,e,n))},t.getFirestore=function(e,t){let n="object"==typeof e?e:a.getApp(),r=a._getProvider(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=u.getDefaultEmulatorHostnameAndPort("firestore");e&&op(r,...e)}return r},t.getPersistentCacheIndexManager=function(e){var t;e=od(e,oS);let n=lB.get(e);if(n)return n;let r=ox(e);if("persistent"!==(null===(t=r._uninitializedComponentsProvider)||void 0===t?void 0:t._offlineKind))return null;let i=new lq(r);return lB.set(e,i),i},t.increment=function(e){return new oY("increment",e)},t.initializeFirestore=function(e,t,n){n||(n="(default)");let r=a._getProvider(e,"firestore");if(r.isInitialized(n)){let e=r.getImmediate({identifier:n}),i=r.getOptions(n);if(u.deepEqual(i,t))return e;throw new b(_.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new b(_.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new b(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})},t.limit=function(e){return of("limit",e),lo._create("limit",e,"F")},t.limitToLast=function(e){return of("limitToLast",e),lo._create("limitToLast",e,"L")},t.loadBundle=function(e,t){let n=ox(e=od(e,oS)),r=new oE;return function(e,t,n,r){var i;let s=(i=sb(t),new aX(function(e,t){if(e instanceof Uint8Array)return aH(e,t);if(e instanceof ArrayBuffer)return aH(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?nK().encode(n):n),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=rn(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Kr.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(al(i));let s=new ao(i,e.localStore,t.serializer),a=await t.Ma();for(;a;){let e=await s.ea(a);e&&n._updateProgress(e),a=await t.Ma()}let o=await s.complete();return await ak(e,o.ra,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.Kr.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.na)}catch(e){return w("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await oe(e),s,r)})}(n,e._databaseId,t,r),r},t.memoryEagerGarbageCollector=function(){return new lN},t.memoryLocalCache=function(e){return new lC(e)},t.memoryLruGarbageCollector=function(e){return new lA(null==e?void 0:e.cacheSizeBytes)},t.namedQuery=function(e,t){var n;return(n=ox(e=od(e,oS))).asyncQueue.enqueue(async()=>{var e;return(e=await a9(n)).persistence.runTransaction("Get named query","readonly",n=>e.Kr.getNamedQuery(n,t))}).then(t=>t?new oy(e,null,t.query):null)},t.onSnapshot=function(e,...t){var n,r,i;let s,a,o;e=u.getModularInstance(e);let l={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||oT(t[c])||(l=t[c],c++);let h={includeMetadataChanges:l.includeMetadataChanges};if(oT(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ow)a=od(e.firestore,oS),o=tW(e._key.path),s={next:n=>{t[c]&&t[c](lS(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=od(e,oy);a=od(n.firestore,oS),o=n._query;let r=new lT(a);s={next:e=>{t[c]&&t[c](new lb(a,r,n,e))},error:t[c+1],complete:t[c+2]},lt(e._query)}return function(e,t,n,r){let i=new aJ(r),s=new ai(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>s7(await on(e),s)),()=>{i.Na(),e.asyncQueue.enqueueAndForget(async()=>ae(await on(e),s))}}(ox(a),o,h,s)},t.onSnapshotsInSync=function(e,t){return function(e,t){let n=new aJ(t);return e.asyncQueue.enqueueAndForget(async()=>{(await on(e)).q_.add(n),n.next()}),()=>{n.Na(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.q_.delete(t)})(await on(e),n))}}(ox(e=od(e,oS)),oT(t)?t:{next:t})},t.or=function(...e){return e.forEach(e=>lm("or",e)),ls._create("or",e)},t.orderBy=function(e,t="asc"){let n=le("orderBy",e);return la._create(n,t)},t.persistentLocalCache=function(e){return new lD(e)},t.persistentMultipleTabManager=function(){return new lM},t.persistentSingleTabManager=lR,t.query=function(e,t,...n){let r=[];for(let i of(t instanceof ln&&r.push(t),function(e){let t=e.filter(e=>e instanceof ls).length,n=e.filter(e=>e instanceof li).length;if(t>1||t>0&&n>0)throw new b(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e},t.queryEqual=o_,t.refEqual=function(e,t){return e=u.getModularInstance(e),t=u.getModularInstance(t),(e instanceof ow||e instanceof ov)&&(t instanceof ow||t instanceof ov)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter},t.runTransaction=function(e,t,n){e=od(e,oS);let r=Object.assign(Object.assign({},lF),n);return function(e){if(e.maxAttempts<1)throw new b(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new T;return e.asyncQueue.enqueueAndForget(async()=>{let i=await ot(e);new a0(e.asyncQueue,i,n,t,r).run()}),r.promise}(ox(e),n=>t(new lO(e,n)),r)},t.serverTimestamp=function(){return new oQ("serverTimestamp")},t.setDoc=function(e,t,n){e=od(e,ow);let r=od(e.firestore,oS),i=lp(e.converter,t,n);return lE(r,[oG(oz(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nT.none())])},t.setIndexConfiguration=/**
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
 */function(e,t){var n;let r=ox(e=od(e,oS));if(!r._uninitializedComponentsProvider||"memory"===(null===(n=r._uninitializedComponentsProvider)||void 0===n?void 0:n._offlineKind))return w("Cannot enable indexes when persistence is disabled"),Promise.resolve();let i=function(e){let t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(e){throw new b(_.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==e?void 0:e.message))}}(e):e,n=[];if(Array.isArray(t.indexes))for(let e of t.indexes){let t=lV(e,"collectionGroup"),r=[];if(Array.isArray(e.fields))for(let t of e.fields){let e=o3("setIndexConfiguration",lV(t,"fieldPath"));"CONTAINS"===t.arrayConfig?r.push(new j(e,2)):"ASCENDING"===t.order?r.push(new j(e,0)):"DESCENDING"===t.order&&r.push(new j(e,1))}n.push(new G(G.UNKNOWN_ID,t,r,W.empty()))}return n}(t);return r.asyncQueue.enqueue(async()=>(async function(e,t){let n=e.indexManager,r=[];return e.persistence.runTransaction("Configure indexes","readwrite",e=>n.getFieldIndexes(e).next(i=>/**
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
 */(function(e,t,n,r,i){t=[...t],(e=[...e]).sort(n),t.sort(n);let s=e.length,a=t.length,o=0,l=0;for(;o<a&&l<s;){let s=n(e[l],t[o]);s<0?i(e[l++]):s>0?r(t[o++]):(o++,l++)}for(;o<a;)r(t[o++]);for(;l<s;)i(e[l++])})(i,t,Q,t=>{r.push(n.addFieldIndex(e,t))},t=>{r.push(n.deleteFieldIndex(e,t))})).next(()=>en.waitFor(r)))})(await a9(r),i))},t.setLogLevel=function(e){m.setLogLevel(e)},t.snapshotEqual=function(e,t){return e instanceof lI&&t instanceof lI?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lb&&t instanceof lb&&e._firestore===t._firestore&&o_(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)},t.startAfter=function(...e){return ll._create("startAfter",e,!1)},t.startAt=function(...e){return ll._create("startAt",e,!0)},t.sum=/**
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
 */function(e){return new oA("sum",o5("sum",e))},t.terminate=function(e){return a._removeServiceInstance(e.app,"firestore",e._databaseId.database),e._delete()},t.updateDoc=function(e,t,n,...r){e=od(e,ow);let i=od(e.firestore,oS),s=oz(i);return lE(i,[("string"==typeof(t=u.getModularInstance(t))||t instanceof oR?oJ(s,"updateDoc",e._key,t,n,r):oH(s,"updateDoc",e._key,t)).toMutation(e._key,nT.exists(!0))])},t.waitForPendingWrites=function(e){return function(e){let t=new T;return e.asyncQueue.enqueueAndForget(async()=>aE(await oe(e),t)),t.promise}(ox(e=od(e,oS)))},t.where=function(e,t,n){let r=le("where",e);return li._create(r,t,n)},t.writeBatch=/**
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
 */function(e){return ox(e=od(e,oS)),new lL(e,t=>lE(e,t))}}}]);