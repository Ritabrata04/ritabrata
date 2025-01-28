// Initialize font properties
const fontname = "Inter"; // Changed to Inter for better readability
const fontweights = [300, 400, 500];

// Color properties - Modern academic color scheme
const basecolor = "#2D3748";     // Darker gray for better contrast
const accentcolor = "#2C5282";   // Deep blue
const highlightcolor = "#1A365D"; // Darker blue for emphasis

// Body properties
const bodyfontweight = 400;      // Increased for better readability
const bodyfontsize = "14pt";     // Increased from 12pt
const backgroundcolor = "#FFFFFF"; // Clean white background

// Link properties
const acolor = accentcolor;
const adecoration = "none";      // Cleaner look, will add hover effects in CSS

// Menu properties
const menucolor = basecolor;
const menufontsize = "16pt";     // Slightly larger
const menudecoration = "none";

// Header properties
const headercolor = accentcolor;
const headerfontsize = "20pt";   // Larger for better hierarchy
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "26pt";     // Larger for emphasis

// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = "15pt";   // Slightly larger than body
const ptitleweight = 500;        // Semi-bold for titles
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = basecolor;
const authorweight = 400;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = 500;          // Semi-bold for self-reference
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = "#4A5568";      // Softer gray for tags
const tagweight = 400;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = "#4A5568"; // Softer gray
const insttitlesize = "13px";     // Slightly larger
const instyearcolor = "#718096";  // Medium gray
const instyearsize = "12px";

// Add additional styles for hover effects and transitions
const styleElement = document.createElement('style');
styleElement.textContent = `
    a {
        transition: all 0.3s ease;
    }
    a:hover {
        color: ${highlightcolor};
        text-decoration: underline;
    }
    .menulink {
        transition: all 0.3s ease;
    }
    .menulink:hover {
        color: ${highlightcolor};
    }
    .papertitle {
        transition: all 0.3s ease;
    }
    .papertitle:hover {
        color: ${highlightcolor};
    }
    .tag {
        background-color: #EDF2F7;
        padding: 2px 8px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
    .tag:hover {
        background-color: #E2E8F0;
    }
`;
document.head.appendChild(styleElement);

// Font loading
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");

// Apply styles
$("body").css({
    "font-family": fontname,
    "color": basecolor,
    "font-weight": bodyfontweight,
    "font-size": bodyfontsize,
    "background-color": backgroundcolor,
    "line-height": "1.6"  // Added for better readability
});

// ... rest of the jQuery style applications remain the same
