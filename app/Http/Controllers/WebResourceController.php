<?php

namespace App\Http\Controllers;

use App\Models\WebResource;
use Illuminate\Http\Request;

class WebResourceController extends Controller
{
    public function privacy(Request $request)
    {
        return [
            'data' => WebResource::query()->where('type', 'privacy')->first(),
        ];
    }

    public function term(Request $request)
    {
        return [
            'data' => WebResource::query()->where('type', 'term')->first(),
        ];
    }

    public function detail(Request $request, WebResource $model)
    {
        return [
            'data' => $model
        ];
    }

    public function update(Request $request, WebResource $model)
    {
        $model->content = $request->get('content');
        $model->save();
        return [
            'data' => $model,
            'message' => 'Resource updated successfully'
        ];
    }
}
