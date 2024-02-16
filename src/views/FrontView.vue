<template>
    <div class="container">
        <h1>這是前台</h1>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
           <a class="navbar-brand" href="#">Navbar</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
           aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div class="navbar-nav">
               <a class="nav-link active" aria-current="page" href="">
                <router-link to="/">首頁</router-link></a>
               <a class="nav-link" href="">
                <router-link to="products">前台產品頁</router-link></a>
               <a class="nav-link" href="">
                <router-link to="cart">前台購物車</router-link>
               </a>
               <a class="nav-link" aria-disabled="true">
                <router-link to="login">後台產品列表</router-link>
               </a>
             </div>
           </div>
         </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script></script>

<style>
a {
    text-decoration: none;
    color: rgb(68, 66, 66);
}
a:hover {
    color: blue;
}
</style>
