<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedCodes extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'created_at',
        'updated_at',
        'file_url',
    ];
}
