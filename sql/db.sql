CREATE TABLE IF NOT EXISTS projects (    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    priority INTEGER NOT NULL,
    description TEXT,
    deliverydate DATE NOT NULL
);


CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name<> ''),
    done BOOLEAN, 
    projectId INTEGER REFERENCES projects(id)
);

INSERT INTO projects (name, priority, description, deliverydate) VALUES ('Make a web app', 1, 'Using javaScript', '2021-01-31');
INSERT INTO projects (name, priority, description, deliverydate) VALUES ('Make an app', 1, 'Using dart', '2021-01-31');
INSERT INTO projects (name, priority, description, deliverydate) VALUES ('Make a desktop app', 2, 'Using C++', '2021-01-31');

-- INSERT TASK DATA --

INSERT INTO tasks(name, done, projectId) VALUES ('download vuejs app', false, 1);
INSERT INTO tasks(name, done, projectId) VALUES ('Create UI Web', false, 1);
INSERT INTO tasks(name, done, projectId) VALUES ('Download Flutter', false, 2);
INSERT INTO tasks(name, done, projectId) VALUES ('Design UI', false, 2);