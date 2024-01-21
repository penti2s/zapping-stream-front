<template>
    <div class="flex items-center justify-center min-h-screen bg-base-200">
      <div class="py-6 mt-4 text-left bg-base-100 shadow-lg px-10 rounded-lg">
        <h3 class="text-2xl font-bold text-center text-base-content">Registrarte</h3>
        <form action="#">
          <div class="mt-4">
            <div>
                <label class="block text-base-content" for="email">Nombre</label>
                <input type="text" placeholder="Email" id="email"
                  class="input input-bordered w-full max-w-xs">
              </div>
            <div>
              <label class="block text-base-content" for="email">Email</label>
              <input type="text" placeholder="Email" id="email"
                class="input input-bordered w-full max-w-xs">
            </div>
            <div class="mt-4">
              <label class="block text-base-content">Contraseña</label>
              <input type="password" placeholder="Contraseña" id="password"
                class="input input-bordered w-full max-w-xs">
            </div>
            <div class="flex flex-col items-center justify-between m-5">
              <button class="btn btn-primary w-full max-w-xs mt-4">Registrarte</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  