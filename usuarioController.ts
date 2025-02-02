import {PrismaClient} from "@prisma/client";
import {Request, Response} from "express";

const prisma = new PrismaClient();

class UsuarioController {
    async criarUsuario(req: Request, res: Response) {
        try {
            const {nome, email, senha, telefone, endereco, tipo} = req.body;
        
            const usuario = await prisma.usuario.create({
                data: {
                    nome,
                    email,
                    senha, 
                    endereco,
                    tipo
                },
            });
            return res.status(201).json({
                message: "Usuário criado com sucesso"});
            } catch(error) {
                return res.status(500).json({error: "Erro ao criar usuário"});
            }
        }

    async listarUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await prisma.usuario.findMany();
            return res.json(usuarios);
        } catch (error) {
            return res.status(500).json({error: "Erro ao buscar usuários"});
        }
    }
    
    async buscarUsuario(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const usuario = await prisma.usuario.findUnique({
                where: {id},
            });
            
            if (!usuario) {
                return res.status(404).json({error: "Usuário não encontrado"});
            }
            return res.json(usuario);
        } catch (error) {
            return res.status(500).json({error: "Erro ao buscar usuário"});
        }
    }
    
    async atualizarUsuario(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const {nome, email, senha , endereco, tipo} = req.body;
            const usuario = await prisma.usuario.update({
                where: {id},
                data: {nome, email, senha, endereco, tipo},});
                
                return res.json(usuario);
            } catch (error) {
                return res.status(500).json({ error: "Erro ao atualizar usuário" });
            }
        }
        
    async deletarUsuario(req: Request, res: Response) {
        try {
            const {id} = req.params;
            await prisma.usuario.delete({where: {id}});
            return res.json({message: "Usuário deletado com sucesso"});
        } catch (error) {
            return res.status(500).json({error: "Erro ao deletar usuário"});
        }
    }
}

export default new UsuarioController();
