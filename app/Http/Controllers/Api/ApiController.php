<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    public function __construct(Category $category)
    {
        $this->Category = $category;
    }
    
    public function index() {
        $category = $this->Category->all();
    
        return response()->json($category);
    }
    
    public function show($id) {
        if (!$category = $this->Category->find($id)) {
            return response()->back();
            // return response()->json(["msg" => "404 NOT FOUND", 404]);
        }

        return response()->json($category);
        // $category = $this->Category->find($id);
        
    }

    public function store(Request $request) {
        $create_category = $this->Category->create($request->all());
        return response()->json(["msg" => "Categoria criada com sucesso"]);
    }
    
    public function update($id, Request $request) {
        $update_category = $request->all();    
        $category = $this->Category->find($id);
        $category->update($update_category);
        return response()->json(['msg' => "O dados da categoria foram atualizados com sucesso!"]);
    }
    
    public function delete($id) {
        $delete_category = $this->Category->destroy($id);
        return response()->json(["msg" => "A categoria foi deletado com sucesso"]);
    }

}