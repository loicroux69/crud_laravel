<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    //Ajouter automatiquement
    protected $fillable = [
        'name', 'slug',
    ];
}
