import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 7, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
    { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 9, name: "Williams", base: "Grove, United Kingdom" },
    { id: 10, name: "Haas", base: "Kannapolis, United States" },
    { id: 11, name: "Uralkali Haas F1 Team", base: "Banbury, United Kingdom" },
    { id: 12, name: "Scuderia Toro Rosso", base: "Faenza, Italy" },
];

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Sergio Perez", team: "Red Bull Racing"},
    {id: 3, name: "Lewis Hamilton", team: "Mercedes"},
    {id: 4, name: "George Russell", team: "Mercedes"},
    {id: 5, name: "Charles Leclerc", team: "Ferrari"},
    {id: 6, name: "Carlos Sainz", team: "Ferrari"},
    {id: 7, name: "Lando Norris", team: "McLaren"},
    {id: 8, name: "Oscar Piastri", team: "McLaren"},
    {id: 9, name: "Fernando Alonso", team: "Aston Martin"},
    {id: 10, name: "Lance Stroll", team: "Aston Martin"},
    {id: 11, name: "Esteban Ocon", team: "Alpine"},
    {id: 12, name: "Pierre Gasly", team: "Alpine"},
    {id: 13, name: "Yuki Tsunoda", team: "AlphaTauri"},
    {id: 14, name: "Nyck de Vries", team: "AlphaTauri"},
    {id: 15, name: "Valtteri Bottas", team: "Alfa Romeo"},
    {id: 16, name: "Zhou Guanyu", team: "Alfa Romeo"},
    {id: 17, name: "Kevin Magnussen", team: "Haas F1 Team"},
    {id: 18, name: "Nico Hulkenberg", team: "Haas F1 Team"},
    {id: 19, name: "Logan Sargeant", team: "Williams"},
    {id: 20, name: "Alex Albon", team: "Williams"}
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);

    return {teams};
})

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);

    return {drivers};
})

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);

    if(!driver) {
        response.type("aplication/json").code(404);
        return {message: "Driver not found"};
    } else {
        response.type("application/json").code(200);
        return {driver};
    }
});


server.listen({port: 3333,}, () => {
    console.log("Server init");
})