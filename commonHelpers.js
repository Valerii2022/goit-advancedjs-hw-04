import{a as c,S as l}from"./assets/vendor-aca6d3a3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="https://pixabay.com/api",u="34628461-4bda2ae404146a46c3fd3a186",m=async(r,s)=>{const t={key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s};try{const{data:n}=await c.get(`${d}`,{params:t});return n}catch{throw new Error(err.message)}},a={form:document.querySelector(".search-form"),input:document.querySelector(".input"),searchBtn:document.querySelector(".search-btn"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let f=1;a.form.addEventListener("submit",p);function p(r){r.preventDefault(),a.loader.classList.remove("hidden"),m(r.currentTarget.searchQuery.value.trim(),f).then(s=>{h(s)}).catch(s=>{a.loader.classList.add("hidden"),console.log(s)}),r.currentTarget.reset()}function h(r){a.loader.classList.add("hidden"),a.list.innerHTML=g(r)}function g({hits:r}){return console.log(r),r.map(t=>`<a class="link" href=${t.largeImageURL} id=${t.id}><div class="photo-card" >
    <div class="img-wrap"><img src=${t.webformatURL} alt=${t.tags} loading="lazy" /></div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            <span>${t.likes}</span>
        </p>
        <p class="info-item">
            <b>Views</b>
            <span>${t.views}</span>
        </p>
        <p class="info-item">
            <b>Comments</b>
            <span>${t.comments}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <span>${t.downloads}</span>
        </p>
    </div>
</div></a>`).join("")}new l(".link");
//# sourceMappingURL=commonHelpers.js.map
