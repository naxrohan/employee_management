<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\Backend\UserController;

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/user_manage', [App\Http\Controllers\HomeController::class, 'user'])->name('user_manage');
Route::get('/department_manage', [App\Http\Controllers\HomeController::class, 'department'])->name('department_manage');
Route::get('/country_state_city', [App\Http\Controllers\HomeController::class, 'country_state_city'])->name('country_state_city');

Route::resource('users', UserController::class);
Route::resource('employee', EmployeeController::class);
Route::resource('department', DepartmentController::class);
Route::resource('country', CountryController::class);
Route::resource('state', StateController::class);
Route::resource('city', CityController::class);
