import express from "express";

interface IReadController {
    retrieve?: express.RequestHandler;
    findById?: express.RequestHandler;
}

export default IReadController