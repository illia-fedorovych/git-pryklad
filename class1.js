class Class1 {
    constructor() {
        this.name = 'Class1';
    }
    getName() {
        return this.name;
    }
}

--- x------x----- x-- - x-- - x----- x(class2)------------x(master, merge commit)
\                     /
\------x(class1)----- /

--- x------x----- x-- - x-- - x----- x(class2)---------
\
\------X(class1, master)


git remote add origin https://github.com/illia-fedorovych/git-pryklad.git
git branch - M main
git push - u origin main