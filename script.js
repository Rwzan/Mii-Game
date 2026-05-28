// إعدادات الجسم
let currentBodyIndex = 1;
const totalBodies = 27; 

function changeBody(direction) {
    currentBodyIndex += direction;
    if (currentBodyIndex > totalBodies) currentBodyIndex = 1;
    else if (currentBodyIndex < 1) currentBodyIndex = totalBodies;

    document.getElementById('layer-body').src = `assets/body (${currentBodyIndex}).png`;
    document.getElementById('body-label').innerText = `الجسم: ${currentBodyIndex}`;
}

// إعدادات الشعر
let currentHairIndex = 1;
const totalHairStyles = 28; 

function changeHair(direction) {
    currentHairIndex += direction;
    if (currentHairIndex > totalHairStyles) currentHairIndex = 1;
    else if (currentHairIndex < 1) currentHairIndex = totalHairStyles;

    let hairFileName = currentHairIndex < 10 ? '0' + currentHairIndex : currentHairIndex;
    document.getElementById('layer-hair').src = `assets/hair${hairFileName}.png`;
    document.getElementById('hair-label').innerText = `الشعر: ${currentHairIndex}`;
}

// إعدادات الوجه
let currentFaceIndex = 1;
const totalFaces = 34; 

function changeFace(direction) {
    currentFaceIndex += direction;
    if (currentFaceIndex > totalFaces) currentFaceIndex = 1;
    else if (currentFaceIndex < 1) currentFaceIndex = totalFaces;

    let faceFileName = currentFaceIndex < 10 ? '0' + currentFaceIndex : currentFaceIndex;
    document.getElementById('layer-face').src = `assets/face${faceFileName}.png`;
    document.getElementById('face-label').innerText = `الوجه: ${currentFaceIndex}`;
}

// --- إعدادات تعديل الشعر والرأس ---
let hairScale = 0.8;  
let hairX = 0; 
let hairY = -200;      

// --- إعدادات تعديل الملامح ---
let faceScale = 0.5;
let faceX = 0;
let faceY = 0;

window.onload = function() {
    applyHairTransform();
    applyFaceTransform();
};

// دالة التحكم بحركة وحجم الشعر
function adjustHair(action) {
    const step = 15; 
    const scaleStep = 0.05; 

    if (action === 'up') hairY -= step;
    if (action === 'down') hairY += step;
    if (action === 'left') hairX -= step;  
    if (action === 'right') hairX += step; 
    if (action === 'plus') hairScale += scaleStep;
    if (action === 'minus') hairScale -= scaleStep;

    applyHairTransform();
}

function applyHairTransform() {
    document.getElementById('hair-container').style.transform = `translate(${hairX}px, ${hairY}px) scale(${hairScale})`;
    document.getElementById('hair-container').style.transformOrigin = 'center bottom';
}

// دالة التحكم بالملامح
function adjustFace(action) {
    const step = 10; 
    const scaleStep = 0.04;

    if (action === 'up') faceY -= step;
    if (action === 'down') faceY += step;
    if (action === 'left') faceX -= step;
    if (action === 'right') faceX += step;
    if (action === 'plus') faceScale += scaleStep;
    if (action === 'minus') faceScale -= scaleStep;

    applyFaceTransform();
}

function applyFaceTransform() {
    document.getElementById('layer-face').style.transform = `translate(${faceX}px, ${faceY}px) scale(${faceScale})`;
}