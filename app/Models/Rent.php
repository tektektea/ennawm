<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rent extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','rent_at', 'video_id', 'otp','playback_info', 'ttl','remark'];
    protected $appends = ['expired'];
    protected $dates = [
    'created_at',
    'updated_at',
    'rent_at'
];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getExpiredAttribute()
    {
        return !$this->rent_at->addSeconds($this->ttl)?->isFuture() ?? false;
    }
    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class);
    }
}
