<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function __constructor(){
        $this->middleware('auth');
    }

    public function index(){
        $roles = auth()->user()->roles->pluck('name')->toArray();
        $users = User::all()->load('roles');

        if (Gate::allows('administrator')) {
            return Inertia::render('Admin/Index',[
                'userRoles' => $roles,
                'users' => $users,
            ]);
        } else {
            abort(403, 'Unauthorized action.');
        }
    }
    public function destroy(User $user){
        $user->delete();
        return redirect()->route('admin');
    }
}
