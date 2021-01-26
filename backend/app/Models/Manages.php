<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manages extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_manage',
        'team_name',
        'address',
        'schedule_id',
        'football_id',
    ];
}
