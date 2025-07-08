<template>

  <div>
    <CButton class="ms-auto d-flex justify-content-end" color="primary" @click="UserList">User List</CButton>
  </div>
  <div class=" d-flex justify-content-center" style="margin-top: 1rem !important">
    <CCardBody>
      <CRow class="justify-content-center">
        <div class="text-center">
          <CCard>
            <CCardHeader class="bg-primary text-white">
              <h4 class="mb-0">User Registration Form</h4>
            </CCardHeader>
            <CCardBody>
              <form @submit.prevent="handleSubmit">
                <CRow>
                  <div class="mb-3 col-md-4">
                    <label for="userName" class="form-label">User Name *</label>
                    <input
                      v-model="form.userName"
                      type="text"
                      class="form-control"
                      id="userName"
                      placeholder="User Name"
                      required
                    />
                  </div>

                  <div class="mb-3 col-md-3">
                    <label for="phoneNumber" class="form-label">Phone Number *</label>
                    <input
                      v-model="form.phoneNumber"
                      type="text"
                      class="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div class="mb-3 col-md-3">
                    <label for="role" class="form-label">Role</label>
                    <select v-model="form.role" class="form-select" id="role">
                      <option value="">Select Role</option>
                      <option value="ADMIN">Admin</option>
                      <option value="RESIDENT">Resident</option>
                      <option value="GUARD">Guard</option>
                    </select>
                  </div>

                  <div class="mb-3 col-md-2">
                    <label for="status" class="form-label">Status</label>
                    <select v-model="form.status" class="form-select" id="status">
                      <option value="">Select Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="password" class="form-label">Password *</label>
                    <input
                      v-model="form.password"
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="confirmPassword" class="form-label">Confirm Password *</label>
                    <input
                      v-model="form.confirmPassword"
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </CRow>

                <div class="d-grid mt-4">
                  <CButton type="submit" color="primary" size="lg">
                    Register User
                  </CButton>
                </div>
              </form>

              <CAlert v-if="submitted && !error" color="success" class="mt-4 text-center">
                User registered successfully!
              </CAlert>

              <CAlert v-if="error" color="danger" class="mt-4 text-center">
                {{ error }}
              </CAlert>

              <!-- <CAlert v-else-if="submitted" color="danger" class="mt-4 text-center">
                User registered successfully!
              </CAlert> -->
            </CCardBody>
          </CCard>
        </div>
      </CRow>
    </CCardBody>
  </div>
</template>

<script>
import { UserServices } from '../../services'
export default {
  name: 'UserRegistration',
  data() {
    return {
      form: {
        userName: '',
        phoneNumber: '',
        role: '',
        status: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false,
      error: '',
    }
  },
  methods: {
    UserList() {
      this.$router.push({ name: 'Users' })
    },
    handleSubmit() {
      // Reset states
      this.submitted = false
      this.error = ''

      // Validation
      if (this.form.password !== this.form.confirmPassword) {
        this.error = 'Passwords do not match.'
        return
      }

      if (!this.form.userName || !this.form.phoneNumber || !this.form.password) {
        this.error = 'Please fill all required fields.'
        return
      }

      // Submit logic would go here (API call)
      console.log('Form submitted:', this.form)

      const userData = {
        userName: this.form.userName,
        phoneNumber: this.form.phoneNumber,
        role: this.form.role,
        status: this.form.status,
        passwordHash: this.form.password
      }

      new UserServices().addUser(userData)
        .then(response => {
          // Handle success
          if (response.status === 200 || response.status === 201) {
            this.submitted = true
            this.form = {
              userName: '',
              phoneNumber: '',
              role: '',
              status: '',
              password: '',
              confirmPassword: ''
            }
            console.log('User registered successfully:', response.data)
          } else {
            this.error = 'Failed to register user.'
          }
          // this.submitted = true
          // this.error = ''
        })
        .catch(err => {
          // Handle error
          // this.error = 'An error occurred while registering the user.'
        })

      // Simulate successful submission
      this.submitted = true
      this.form = {
        userName: '',
        phoneNumber: '',
        role: '',
        status: '',
        password: '',
        confirmPassword: ''
      }
    }
  }
}
</script>

<style scoped>
.bg-light {
  background-color: #f8f9fa !important;
}
</style>
