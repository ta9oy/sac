<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
  <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <form @submit.prevent="submitLogin">
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autocomplete="userName" v-model="userName" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput type="password" placeholder="Password" autocomplete="current-password"
                      v-model="password" />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" type="submit" class="px-4"> Login </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
                </form>
              </CCardBody>
            </CCard>
            <!-- <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton>
                </div>
              </CCardBody>
            </CCard> -->
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { LoginServices } from '../../services';
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    submitLogin() {
      const data = {
        userName: this.userName,
        passwordHash: this.password
      };
     new LoginServices().loginUser(data)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
          this.$router.push({ name: "Dashboard" });
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("userName", response.data.userName);
            // localStorage.setItem("userId", response.data.userId);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
