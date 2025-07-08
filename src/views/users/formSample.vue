<template>
  <div class="bg-light d-flex align-items-center justify-content-center min-vh-100">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="10" lg="8">
          <CCard>
            <CCardHeader class="text-center bg-primary text-white">
              <h4 class="mb-0">Patient Registration Form</h4>
            </CCardHeader>
            <CCardBody>
              <form @submit.prevent="handleSubmit">
                <CRow>
                  <!-- Left Column -->
                  <CCol md="6">
                    <!-- Full Name -->
                    <div class="mb-3">
                      <label for="fullName" class="form-label">Full Name *</label>
                      <input
                        v-model="form.fullName"
                        type="text"
                        class="form-control"
                        id="fullName"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <!-- Mobile Number 1 -->
                    <div class="mb-3">
                      <label for="mobile1" class="form-label">Mobile Number 1 *</label>
                      <input
                        v-model="form.mobile1"
                        type="tel"
                        class="form-control"
                        id="mobile1"
                        placeholder="Mobile Number 1"
                        required
                      />
                    </div>

                    <!-- GB Member -->
                    <div class="mb-3">
                      <label for="isGbMember" class="form-label">Is GB Member?</label>
                      <select
                        v-model="form.isGbMember"
                        class="form-select"
                        id="isGbMember"
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <!-- Health Assistant -->
                    <div class="mb-3">
                      <label for="healthAssistant" class="form-label">Health Assistant</label>
                      <select
                        v-model="form.healthAssistant"
                        class="form-select"
                        id="healthAssistant"
                      >
                        <option value="">Select Health Assistant</option>
                        <option value="assistant1">Assistant 1</option>
                        <option value="assistant2">Assistant 2</option>
                      </select>
                    </div>

                    <!-- Marital Status -->
                    <div class="mb-3">
                      <label for="maritalStatus" class="form-label">Marital Status</label>
                      <select
                        v-model="form.maritalStatus"
                        class="form-select"
                        id="maritalStatus"
                      >
                        <option value="">Select Marital Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                      </select>
                    </div>

                    <!-- National ID -->
                    <div class="mb-3">
                      <label for="nationalId" class="form-label">National ID</label>
                      <input
                        v-model="form.nationalId"
                        type="text"
                        class="form-control"
                        id="nationalId"
                        placeholder="Patient's National ID"
                      />
                    </div>

                    <!-- Guardian Name -->
                    <div class="mb-3">
                      <label for="guardianName" class="form-label">Guardian Name</label>
                      <input
                        v-model="form.guardianName"
                        type="text"
                        class="form-control"
                        id="guardianName"
                        placeholder="Guardian Name"
                      />
                    </div>

                    <!-- Mobile Number 2 -->
                    <div class="mb-3">
                      <label for="mobile2" class="form-label">Mobile Number 2</label>
                      <input
                        v-model="form.mobile2"
                        type="tel"
                        class="form-control"
                        id="mobile2"
                        placeholder="Mobile Number 2"
                      />
                    </div>
                  </CCol>

                  <!-- Right Column -->
                  <CCol md="6">
                    <!-- Village -->
                    <div class="mb-3">
                      <label for="village" class="form-label">Village *</label>
                      <input
                        v-model="form.village"
                        type="text"
                        class="form-control"
                        id="village"
                        placeholder="Unknown Village"
                        required
                      />
                    </div>

                    <!-- Email -->
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        v-model="form.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>

                    <!-- Occupation -->
                    <div class="mb-3">
                      <label for="occupation" class="form-label">Occupation</label>
                      <input
                        v-model="form.occupation"
                        type="text"
                        class="form-control"
                        id="occupation"
                        placeholder="Occupation"
                      />
                    </div>

                    <!-- Mother Name -->
                    <div class="mb-3">
                      <label for="motherName" class="form-label">Mother Name</label>
                      <input
                        v-model="form.motherName"
                        type="text"
                        class="form-control"
                        id="motherName"
                        placeholder="Mother Name"
                      />
                    </div>

                    <!-- Age (Year, Month, Days) -->
                    <div class="mb-3">
                      <label class="form-label">Age</label>
                      <div class="d-flex gap-2">
                        <input
                          v-model="form.ageYears"
                          type="number"
                          class="form-control"
                          placeholder="Year"
                          min="0"
                        />
                        <input
                          v-model="form.ageMonths"
                          type="number"
                          class="form-control"
                          placeholder="Month"
                          min="0"
                          max="11"
                        />
                        <input
                          v-model="form.ageDays"
                          type="number"
                          class="form-control"
                          placeholder="Days"
                          min="0"
                          max="30"
                        />
                      </div>
                    </div>

                    <!-- Home Name -->
                    <div class="mb-3">
                      <label for="homeName" class="form-label">Home Name *</label>
                      <select
                        v-model="form.homeName"
                        class="form-select"
                        id="homeName"
                        required
                      >
                        <option value="">Select Home</option>
                        <option value="home1">Home 1</option>
                        <option value="home2">Home 2</option>
                      </select>
                    </div>

                    <!-- Blood Group -->
                    <div class="mb-3">
                      <label for="bloodGroup" class="form-label">Blood Group</label>
                      <select
                        v-model="form.bloodGroup"
                        class="form-select"
                        id="bloodGroup"
                      >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>

                    <!-- Gender -->
                    <div class="mb-3">
                      <label for="gender" class="form-label">Gender *</label>
                      <select
                        v-model="form.gender"
                        class="form-select"
                        id="gender"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <!-- Birth Date -->
                    <div class="mb-3">
                      <label for="birthDate" class="form-label">Birth Date *</label>
                      <input
                        v-model="form.birthDate"
                        type="date"
                        class="form-control"
                        id="birthDate"
                        required
                      />
                    </div>

                    <!-- Street Address -->
                    <div class="mb-3">
                      <label for="streetAddress" class="form-label">Street Address</label>
                      <input
                        v-model="form.streetAddress"
                        type="text"
                        class="form-control"
                        id="streetAddress"
                        placeholder="Patient's address"
                      />
                    </div>

                    <!-- Nationality -->
                    <div class="mb-3">
                      <label for="nationality" class="form-label">Nationality</label>
                      <input
                        v-model="form.nationality"
                        type="text"
                        class="form-control"
                        id="nationality"
                        placeholder="Nationality"
                      />
                    </div>
                  </CCol>
                </CRow>

                <!-- Submit Button -->
                <div class="d-grid mt-4">
                  <CButton type="submit" color="primary" size="lg">
                    Register Patient
                  </CButton>
                </div>
              </form>

              <!-- Success Alert -->
              <CAlert v-if="submitted" color="success" class="mt-4 text-center">
                Patient registered successfully!
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  fullName: '',
  mobile1: '',
  isGbMember: '',
  healthAssistant: '',
  maritalStatus: '',
  nationalId: '',
  guardianName: '',
  mobile2: '',
  village: '',
  email: '',
  occupation: '',
  motherName: '',
  ageYears: 0,
  ageMonths: 0,
  ageDays: 0,
  homeName: '',
  bloodGroup: '',
  gender: '',
  birthDate: '',
  streetAddress: '',
  nationality: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
/* Add any custom styles here if needed */
.form-label {
  font-weight: 500;
}
</style>
