"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getResponse() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/assets/hello.txt");
        // const data = await response.json();
        const data = yield response.text();
        console.log(data);
    });
}
getResponse();
function postResponse() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/api/echo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "Hello Echo" }),
        });
        const data = yield res.json();
        console.log(data);
    });
}
postResponse();
const baseUrl = "http://localhost:3000/api/todos";
function getTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(baseUrl);
        return res.json();
    });
}
function addTodos(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(name),
        });
        return res.json();
    });
}
function getTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${baseUrl}/${id}`);
        if (res.ok) {
            return res.json();
        }
        return null;
    });
}
function updateTodo(todo) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${baseUrl}/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: todo.name }),
        });
    });
}
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
        });
        return { success: res.ok };
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield getTodos();
            console.log(todos);
            const newTodo = yield addTodos("new todo");
            console.log(newTodo);
            const todo = yield getTodo(newTodo.id);
            console.log(todo);
            yield updateTodo({
                id: Number(newTodo.id),
                name: "updated todo",
            });
            const updatedTodo = yield getTodo(newTodo.id);
            console.log(updatedTodo);
            yield deleteTodo(newTodo.id);
            const deletedTodo = yield getTodo(newTodo.id);
            console.log(deletedTodo);
        }
        catch (e) {
            console.error(e);
        }
    });
}
main();
