#!/usr/bin/python3
"""deletes data from database"""
import sys
from model_state import Base, State
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine


if name == "main":
    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}"
                           .format(sys.argv[1], sys.argv[2], sys.argv[3]),
                           pool_pre_ping=True)
    Session = sessionmaker(bind=engine)
    session = Session()
    Base.metadata.create_all(engine)

    result = session.query(State).filter(State.name.like('%a%'))

    for row in result:
        session.delete(row)

    session.commit()

    session.close()
