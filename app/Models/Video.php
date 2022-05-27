<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Video extends Model
{
    use HasFactory;

    protected $fillable = ['uid','title','price','poster_url','trailer_url', 'description'];
    protected $appends = ['type'];

    public function rent(): HasMany
    {
        return $this->hasMany(Rent::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'rents');
    }

    public function getTypeAttribute(): string
    {
        return $this->price <= 0 ? 'Free' : 'Premium';
    }
}
