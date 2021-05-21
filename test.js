
//In both VS Code and GitHub properties in declaration position (e.g. in an object literal) are blue. In AtomOne, they are bright red. 

var test = 'string'


// At the same time references to properties are red too, and import bindings as well, as are JSX elements. 
import styles from './LoggedOutHomepage.module.scss'


//And then for some reason also this and super() (unlike other keywords and function calls).

this
super()

// This means there's a lot of red. In color psychology, red looks angry and stands out alot,
// so it can work well to highlight keywords, but it feels like a large percentage of the code 
//is red in this theme which seems rather overwhelming and makes other keywords stand out less.
//In GitHub for example the only red-ish element are the orange-red keywords, and in VS Code red 
//is almost not used at all except for escape sequences like \n (strings are brown-ish, so it works 
//well to highlight the escape sequences within strings).

var escapestring = "escape, \n in string"


//Green and red being heavily used for the most common elements can cause contrast issues in diff views, 
//where the background is also a shade of green or red.


//Variables (in declarations) and types/class/interface names are the same color (orange), 
//which means the theme gives no visual cues to separate the "value realm" and the "types realm" 
//(this is done by the VS Code theme for example).

var declared = 1
class Foo {

}


///There is no color distinction/variation between control flow keywords 
if, else, while, for, await, try, catch, throw

//and declarative keywords 
function, class, async, private, public, abstract
