# CW-03 JavaScript Nonogram Puzzle

## Overview
This project implements a fully functional Nonogram puzzle using JavaScript DOM manipulation. Nonograms are logic puzzles where you fill in squares based on number clues to reveal a hidden picture.

## Features Implemented

### ✅ Part I: Alert on Tile Click
- **Requirement:** Alert popup when user clicks a tile
- **Implementation:** Event listeners attached to all `.box` elements
- **Status:** Complete (can be enabled for testing)

### ✅ Part II: Single Tile Fill
- **Requirement:** Make tiles turn black when clicked
- **Implementation:** Add `.filled` class on click
- **Status:** Complete (superseded by Part III)

### ✅ Part III: Fill Toggling
- **Requirement:** Toggle tiles between filled and empty
- **Implementation:** 
  - Click filled tile → becomes empty
  - Click empty tile → becomes filled
  - Smooth transitions with animations
- **Status:** Complete with enhancements

### ✅ Part IV: Hover Effects
- **Requirement:** Highlight tile borders on hover
- **Implementation:** CSS `:hover` pseudo-selector
- **Features:**
  - Border color change to blue
  - Border width increase
  - Scale transformation (1.05x)
  - Box shadow effect
- **Status:** Complete with visual enhancements

### ✅ Part V: Clear Button
- **Requirement:** Button to clear all filled tiles
- **Implementation:**
  - "Clear" button in controls section
  - Removes all `.filled` classes
  - Confirmation dialog for user safety
  - Animation effects during clearing
- **Status:** Complete with UX improvements

### ✅ Part VI: Drag and Fill
- **Requirement:** Click and drag to fill multiple tiles
- **Implementation:**
  - Mouse down starts drag mode
  - Mouse enter applies drag action
  - Drag mode determined by starting tile state
  - Works with both fill and clear operations
- **Status:** Complete with advanced functionality

### ✅ Part VII: X-Filling
- **Requirement:** Add crossed-out tiles with X background
- **Implementation:**
  - `.crossed-out` class with X background
  - Right-click or toggle mode for X marking
  - SVG-based X icon for crisp display
  - Red background for visual distinction
- **Status:** Complete with SVG implementation

## Bonus Features Implemented

### 🌟 Advanced Functionality
1. **Toggle Mode System**
   - Switch between Fill and Cross modes
   - Visual button state changes
   - Mode-specific cursor behavior

2. **Keyboard Shortcuts**
   - `C` - Clear all tiles
   - `T` - Toggle between fill/cross modes
   - `F` - Force fill mode
   - `X` - Force cross mode

3. **Solution Checker**
   - "Check Solution" button
   - Validates against predefined solution
   - Celebration animation on success
   - Helpful feedback for incorrect attempts

4. **Enhanced Animations**
   - Tile change animations
   - Hover effects with scaling
   - Smooth color transitions
   - Celebration sequences

5. **Drag Functionality**
   - Supports both fill and cross modes
   - Intelligent drag mode detection
   - Smooth multi-tile operations

### 🎨 Visual Enhancements
- **Professional Styling:** Modern gradient backgrounds, shadows, rounded corners
- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Color Coded States:** 
  - White: Empty tiles
  - Dark: Filled tiles  
  - Red: Crossed-out tiles
- **Interactive Feedback:** Hover effects, click animations, visual state changes

### 🛠️ Developer Features
- **Grid Utilities:** Helper functions for debugging and testing
- **Console Logging:** Development feedback and control instructions
- **Modular Code:** Organized functions for each feature
- **Error Prevention:** Input validation and user confirmations

## Technical Implementation

### DOM Manipulation Techniques Used
- **Event Listeners:** Click, mousedown, mouseenter, mouseup, contextmenu
- **Class Management:** Adding/removing CSS classes dynamically
- **Element Selection:** `querySelectorAll`, `querySelector` with data attributes
- **Dynamic Content:** Button creation and text updates
- **Animation Control:** CSS class toggling for animations

### Event Handling Patterns
- **Event Delegation:** Efficient handling of multiple tiles
- **Drag Detection:** Mouse state tracking across elements
- **Keyboard Events:** Global shortcut system
- **Context Menu:** Right-click functionality
- **Touch Support:** Mobile-friendly interactions

### CSS Integration
- **Pseudo-selectors:** `:hover`, `:active` states
- **Transitions:** Smooth property changes
- **Animations:** Keyframe-based effects
- **Responsive Design:** Media queries for different screen sizes
- **Custom Properties:** Consistent color schemes

## File Structure
```
cw-03/
├── nonograms.html      # Main HTML structure with 5x5 grid
├── nonograms.css       # Complete styling with all states
├── nonograms.js        # Full JavaScript implementation
└── README.md           # This documentation
```

## How to Play
1. **Objective:** Fill tiles to match the number clues
2. **Controls:**
   - **Left Click:** Fill/unfill tiles (toggle)
   - **Right Click:** Mark tiles with X
   - **Drag:** Fill multiple tiles in one motion
   - **Clear Button:** Reset entire puzzle
   - **Toggle Mode:** Switch between fill and cross modes

3. **Number Clues:** 
   - Show consecutive filled squares in each row/column
   - Example: "1 1" means two separate single squares
   - Example: "3" means three consecutive squares

## Browser Compatibility
- **Modern Browsers:** Chrome, Firefox, Safari, Edge
- **Mobile Support:** Touch-friendly interactions
- **Keyboard Support:** Full shortcut system
- **Accessibility:** High contrast, clear visual feedback

## Development Notes
- **Progressive Enhancement:** Each part builds on previous functionality
- **Clean Code:** Well-commented, modular implementation
- **Performance:** Efficient event handling and DOM manipulation
- **Extensible:** Easy to add new features or grid sizes

## Testing Instructions
1. Open `nonograms.html` in a web browser
2. Test basic clicking to fill/unfill tiles
3. Try right-clicking for X marks
4. Test drag functionality across multiple tiles
5. Use Clear button and mode toggle
6. Try keyboard shortcuts
7. Test solution checker with correct pattern

This implementation demonstrates comprehensive JavaScript DOM manipulation skills while creating an engaging, interactive puzzle game.