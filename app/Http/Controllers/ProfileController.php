<?php

namespace App\Http\Controllers;

use App\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profiles = Profile::all();
        
        return view('profiles', ['js' => true], compact('profiles'));
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('add', ['js' => false]);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate(
            [
                'first_name' => 'required',
                'last_name' => 'required',
                'description' => 'required',
                'image' => 'required',
            ]
        );
        
        $profile = Profile::create($validatedData);
        
        return redirect('/')->with('success', 'Profile added !');
    }

//    /**
//     * Display the specified resource.
//     *
//     * @param \App\Profile $profile
//     * @return \Illuminate\Http\Response
//     */
//    public function show(Profile $profile)
//    {
//    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Profile $profile
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $validatedData = $request->validate(
            [
                'first_name' => '',
                'last_name' => '',
                'description' => '',
                'image' => '',
            ]
        );
        
//        if(Profile::whereColumn('last_name', '=', $validatedData->last_name )->get()){
//            return redirect('/crud')->with('error', 'Already existing profile !');
//        }
//
        
        Profile::whereId($id)->update($validatedData);
        
        
        return redirect('/crud')->with('success', 'Profile updated!');
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Profile $profile
     * @return \Illuminate\Http\Response
     */
//    public function update(Request $request, Profile $profile)
//    {
//        //
//    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Profile $profile
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        $name = $profile->first_name;
        $profile->delete();
        
        return redirect('/crud')->with('success', 'Bye Bye '.$name);
        
    }
    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Profile $profile
     * @return \Illuminate\Http\Response
     */
    public function crud(Profile $profile)
    {
        return view('crud', ['profiles' => Profile::all(), 'js' => false]);
    }
}
