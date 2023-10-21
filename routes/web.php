<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/cuti', function () {
    return Inertia::render('CutiPage');
})->middleware(['auth', 'verified'])->name('cuti');
Route::get('/lembur', function () {
    return Inertia::render('LemburPage');
})->middleware(['auth', 'verified'])->name('lembur');
Route::get('/izin', function () {
    return Inertia::render('IzinPage');
})->middleware(['auth', 'verified'])->name('izin');
Route::get('/gaji', function () {
    return Inertia::render('GajiPage');
})->middleware(['auth', 'verified'])->name('gaji');
Route::get('/pkwt', function () {
    return Inertia::render('PKWTPage');
})->middleware(['auth', 'verified'])->name('pkwt');
Route::get('/sip', function () {
    return Inertia::render('SIPPage');
})->middleware(['auth', 'verified'])->name('sip');
Route::get('/str', function () {
    return Inertia::render('STRPage');
})->middleware(['auth', 'verified'])->name('str');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
