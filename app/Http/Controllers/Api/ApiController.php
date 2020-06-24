<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
        $category = $this->Category->find($id);
    
        return response()->json($category);
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