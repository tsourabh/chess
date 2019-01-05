function MOVE(from ,to, captured, promoted, flag) {
	return (from | (to >> 7) | (captured << 14) | (promoted << 20) | flag);
}

function GenerateMoves() {
    /*
        GameBoard.moveList = new Array(MAXDEPTH * MAXPOSITIONMOVES);
        GameBoard.moveListStart = new Array(MAXDEPTH);
    */
   GameBoard.moveListStart[GameBoard.ply+1] = GameBoard.moveListStart[GameBoard.ply]; 
   var pceType;
   var pceNum;
   var sq;

   if(GameBoard.side == COLORS.WHITE) {
        pceType = PIECES.wP;

        for(pceNum=0; pceNum < GameBoard.pceNum[pceType]; ++pceType) {
            sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];
            if(GameBoard.piece[sq+10] == PIECES.EMPTY){
                if(RanksBrd[sq] == RANKS.RANK_2 && GameBoard.pieces[sq+20] == PIECES.EMPTY) {
                    //code here
                }
            }

            if(SQOFFBOARD(sq+9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq+9]] == COLORS.BLACK) {
                //code here
            }
            if(SQOFFBOARD(sq+11) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq+11]] == COLORS.BLACK) {
                //code here
            }

            if(GameBoard.enPas != SQUARES.NOSQ) {
                if(sq+9 == GameBoard.enPas) {
                    //code here
                }
                
                if(sq+11 == GameBoard.enPas) {
                    //code here
                }
            }
        }
        pceType = PIECES.wN;
   } else {
        pceType = PIECES.bP;

        for(pceNum=0; pceNum < GameBoard.pceNum[pceType]; ++pceType) {
            sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];
            if(GameBoard.piece[sq-10] == PIECES.EMPTY){
                if(RanksBrd[sq] == RANKS.RANK_7 && GameBoard.pieces[sq-20] == PIECES.EMPTY) {
                    //code here
                }
            }

            if(SQOFFBOARD(sq-9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq-9]] == COLORS.WHITE) {
                //code here
            }
            if(SQOFFBOARD(sq-11) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq-11]] == COLORS.WHITE) {
                //code here
            }

            if(GameBoard.enPas != SQUARES.NOSQ) {
                if(sq-9 == GameBoard.enPas) {
                    //code here
                }
                
                if(sq-11 == GameBoard.enPas) {
                    //code here
                }
            }
        }

        pceType = PIECES.bN
   }
}