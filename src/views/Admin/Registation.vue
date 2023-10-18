<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'

</script>

<template>
    <div class="container">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Registration</h2>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter your username"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword"
                                placeholder="Confirm your password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.card-header {
    background: linear-gradient(to right, #3498db, #8e44ad);
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 15px 15px 0 0;
}

.card-body {
    padding: 30px;
}

.form-control {
    border: 2px solid #3498db;
    border-radius: 5px;
    transition: border-color 0.3s;
}

.form-control:focus {
    border-color: #8e44ad;
}

.btn-primary {
    background: #3498db;
    border: none;
    border-radius: 5px;
}

.btn-primary:hover {
    background: #8e44ad;
}</style>