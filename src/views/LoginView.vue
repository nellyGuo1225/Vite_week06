<template>
  <div
    class="container-fluid border border-light shadow-sm p-3 mb-3 bg-body rounded"
  >
    <h1 class="h3 text-center fw-bold">請先登入</h1>
    <div class="mt-3 row">
      <label for="inputEmail" class="col-md-3 col-sm-2 col-form-label"
        >Email</label
      >
      <div class="col-md-9 col-sm-10">
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="name@example.com"
          v-model="user.username"
        />
      </div>
    </div>
    <div class="mt-3 row">
      <label for="inputPassword" class="col-md-3 col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-md-9 col-sm-10">
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          v-model="user.password"
        />
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
      <button class="btn btn-primary" type="button" id="login" @click="login">
        登入
      </button>
    </div>
  </div>
  <Loading-Overlay v-model:active="isLoading"></Loading-Overlay>
</template>

<script>
import Swal from 'sweetalert2';

const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$http.post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          Swal.fire(res.data.message);
          this.isLoading = false;
          this.$router.push('/admin');
          // window.location.href="./product.html"
        })
        .catch(() => {
          this.isLoading = false;
          Swal.fire({
            text: '請輸入正確資料並再次登入。',
            icon: 'error',
          });
        });
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
