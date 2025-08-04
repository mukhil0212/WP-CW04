// Nonogram Puzzle JavaScript - CW-03
// DOM Manipulation and Event Handling

// Wait for DOM to load before executing
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize game variables
    let isDragging = false;
    let dragMode = null; // 'fill', 'clear', or 'cross'
    let currentMode = 'fill'; // 'fill' or 'cross'
    
    // Get all tile elements
    const tiles = document.querySelectorAll('.box');
    const clearButton = document.getElementById('clearButton');
    const toggleModeButton = document.getElementById('toggleMode');
    
    // Part I: Make an alert pop up when a user clicks a tile
    function setupInitialClickHandlers() {
        tiles.forEach(tile => {
            tile.addEventListener('click', function() {
                alert('You clicked a tile!');
            });
        });
    }
    
    // Part II: Make a single tile turn black when clicked
    function setupBasicFillHandlers() {
        tiles.forEach(tile => {
            tile.addEventListener('click', function() {
                tile.classList.add('filled');
            });
        });
    }
    
    // Part III: Implement Fill Toggling
    function setupToggleHandlers() {
        tiles.forEach(tile => {
            tile.addEventListener('click', function(e) {
                e.preventDefault();
                handleTileClick(tile, e);
            });
            
            // Part VI: Add right-click for X marking
            tile.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                if (currentMode === 'cross') {
                    handleTileClick(tile, e);
                } else {
                    toggleCrossOut(tile);
                }
            });
            
            // Part VI: Drag and Fill - Mouse events
            tile.addEventListener('mousedown', function(e) {
                e.preventDefault();
                startDrag(tile, e);
            });
            
            tile.addEventListener('mouseenter', function(e) {
                if (isDragging) {
                    handleDragOver(tile);
                }
            });
            
            tile.addEventListener('mouseup', function() {
                endDrag();
            });
        });
        
        // Global mouse up to end drag
        document.addEventListener('mouseup', endDrag);
    }
    
    // Handle tile click based on current mode
    function handleTileClick(tile, event) {
        // Add animation class
        tile.classList.add('changing');
        setTimeout(() => tile.classList.remove('changing'), 300);
        
        if (currentMode === 'fill') {
            // Toggle filled state
            if (tile.classList.contains('filled')) {
                tile.classList.remove('filled');
            } else {
                tile.classList.remove('crossed-out');
                tile.classList.add('filled');
            }
        } else if (currentMode === 'cross') {
            // Toggle crossed-out state
            toggleCrossOut(tile);
        }
    }
    
    // Part VII: Implement X-Filling
    function toggleCrossOut(tile) {
        if (tile.classList.contains('crossed-out')) {
            tile.classList.remove('crossed-out');
        } else {
            tile.classList.remove('filled');
            tile.classList.add('crossed-out');
        }
        
        // Add animation
        tile.classList.add('changing');
        setTimeout(() => tile.classList.remove('changing'), 300);
    }
    
    // Part VI: Drag and Fill functionality
    function startDrag(tile, event) {
        isDragging = true;
        
        // Determine drag mode based on current tile state
        if (currentMode === 'fill') {
            if (tile.classList.contains('filled')) {
                dragMode = 'clear';
            } else {
                dragMode = 'fill';
            }
        } else {
            dragMode = 'cross';
        }
        
        // Apply the action to the starting tile
        handleTileClick(tile, event);
    }
    
    function handleDragOver(tile) {
        if (!isDragging) return;
        
        switch (dragMode) {
            case 'fill':
                tile.classList.remove('crossed-out');
                tile.classList.add('filled');
                break;
            case 'clear':
                tile.classList.remove('filled');
                tile.classList.remove('crossed-out');
                break;
            case 'cross':
                tile.classList.remove('filled');
                tile.classList.add('crossed-out');
                break;
        }
        
        // Add animation
        tile.classList.add('changing');
        setTimeout(() => tile.classList.remove('changing'), 300);
    }
    
    function endDrag() {
        isDragging = false;
        dragMode = null;
    }
    
    // Part V: Add a "Clear" Button functionality
    function setupClearButton() {
        clearButton.addEventListener('click', function() {
            // Add confirmation for better UX
            if (confirm('Are you sure you want to clear all tiles?')) {
                tiles.forEach(tile => {
                    tile.classList.remove('filled', 'crossed-out');
                    // Add clear animation
                    tile.classList.add('changing');
                    setTimeout(() => tile.classList.remove('changing'), 300);
                });
            }
        });
    }
    
    // Toggle between fill and cross modes
    function setupToggleModeButton() {
        toggleModeButton.addEventListener('click', function() {
            if (currentMode === 'fill') {
                currentMode = 'cross';
                toggleModeButton.textContent = 'Toggle Mode: Cross';
                toggleModeButton.classList.add('cross-mode');
            } else {
                currentMode = 'fill';
                toggleModeButton.textContent = 'Toggle Mode: Fill';
                toggleModeButton.classList.remove('cross-mode');
            }
        });
    }
    
    // Bonus: Add keyboard shortcuts
    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            switch(e.key.toLowerCase()) {
                case 'c':
                    // Clear all tiles
                    clearButton.click();
                    break;
                case 't':
                    // Toggle mode
                    toggleModeButton.click();
                    break;
                case 'f':
                    // Force fill mode
                    currentMode = 'fill';
                    toggleModeButton.textContent = 'Toggle Mode: Fill';
                    toggleModeButton.classList.remove('cross-mode');
                    break;
                case 'x':
                    // Force cross mode
                    currentMode = 'cross';
                    toggleModeButton.textContent = 'Toggle Mode: Cross';
                    toggleModeButton.classList.add('cross-mode');
                    break;
            }
        });
    }
    
    // Bonus: Add solve checker
    function checkSolution() {
        // This is a simple example solution for a 5x5 grid
        // In a real implementation, this would be more sophisticated
        const solution = [
            [0, 0, 1, 0, 0], // Row 1: middle tile filled
            [1, 0, 0, 0, 1], // Row 2: first and last tiles filled
            [0, 1, 1, 1, 0], // Row 3: middle three tiles filled
            [1, 0, 0, 0, 1], // Row 4: first and last tiles filled
            [0, 0, 1, 0, 0]  // Row 5: middle tile filled
        ];
        
        let isCorrect = true;
        
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                const tile = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
                const shouldBeFilled = solution[row][col] === 1;
                const isFilled = tile.classList.contains('filled');
                
                if (shouldBeFilled !== isFilled) {
                    isCorrect = false;
                    break;
                }
            }
            if (!isCorrect) break;
        }
        
        return isCorrect;
    }
    
    // Add solve button (bonus feature)
    function addSolveButton() {
        const solveButton = document.createElement('button');
        solveButton.textContent = 'Check Solution';
        solveButton.addEventListener('click', function() {
            if (checkSolution()) {
                alert('🎉 Congratulations! You solved the puzzle!');
                // Add celebration animation
                tiles.forEach((tile, index) => {
                    setTimeout(() => {
                        tile.style.animation = 'tileChange 0.5s ease';
                        setTimeout(() => tile.style.animation = '', 500);
                    }, index * 50);
                });
            } else {
                alert('Not quite right. Keep trying!');
            }
        });
        
        document.querySelector('.controls').appendChild(solveButton);
    }
    
    // Initialize all functionality
    function initializeGame() {
        console.log('Initializing Nonogram Puzzle...');
        
        // Start with Part I for testing, then progress through parts
        setupInitialClickHandlers(); // Part I: Alert on click
        // setupBasicFillHandlers();    // Uncomment for Part II only
        
        // Full implementation (Parts III-VII)  
        setupToggleHandlers();
        setupClearButton();
        setupToggleModeButton();
        setupKeyboardShortcuts();
        addSolveButton();
        
        console.log('Nonogram Puzzle initialized successfully!');
        console.log('Controls:');
        console.log('- Left click: Fill/unfill tiles');
        console.log('- Right click: Mark with X');
        console.log('- Drag: Fill multiple tiles');
        console.log('- Keyboard: C=Clear, T=Toggle mode, F=Fill mode, X=Cross mode');
    }
    
    // Start the game
    initializeGame();
});

// Bonus: Utility functions for grid manipulation
const GridUtils = {
    // Get tile by coordinates
    getTile: function(row, col) {
        return document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    },
    
    // Get all filled tiles in a row
    getFilledInRow: function(row) {
        const filled = [];
        for (let col = 0; col < 5; col++) {
            const tile = this.getTile(row, col);
            if (tile && tile.classList.contains('filled')) {
                filled.push(col);
            }
        }
        return filled;
    },
    
    // Get all filled tiles in a column
    getFilledInColumn: function(col) {
        const filled = [];
        for (let row = 0; row < 5; row++) {
            const tile = this.getTile(row, col);
            if (tile && tile.classList.contains('filled')) {
                filled.push(row);
            }
        }
        return filled;
    },
    
    // Clear entire grid
    clearGrid: function() {
        document.querySelectorAll('.box').forEach(tile => {
            tile.classList.remove('filled', 'crossed-out');
        });
    },
    
    // Fill entire grid
    fillGrid: function() {
        document.querySelectorAll('.box').forEach(tile => {
            tile.classList.remove('crossed-out');
            tile.classList.add('filled');
        });
    }
};

// Make utilities available globally for debugging
window.GridUtils = GridUtils;